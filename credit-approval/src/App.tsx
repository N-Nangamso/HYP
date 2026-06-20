// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./constants/theme";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}