import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ============================================================
   Theme — dark / light mode
   - Defaults to the visitor's system preference
   - Remembers a manual choice in localStorage
   - Works by toggling the `dark` class on <html>, so all
     Tailwind `dark:` variants follow automatically.

   Tailwind setup (one of):
   - v3: in tailwind.config.js →  darkMode: "class"
   - v4: in your main CSS      →  @custom-variant dark (&:where(.dark, .dark *));
   ============================================================ */

type Theme = "light" | "dark";

const STORAGE_KEY = "rogoboa-theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* storage unavailable — fall through to system preference */
  }
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply the class to <html> whenever the theme changes.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme; // native scrollbars, form controls
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode etc. — non-fatal */
    }
  }, [theme]);

  // Follow the system if the visitor changes it mid-session
  // and hasn't made a manual choice yet.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return; // manual choice wins
      } catch {
        /* ignore */
      }
      setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return ctx;
}