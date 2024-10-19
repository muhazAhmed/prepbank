import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./lib/ThemeContext.tsx";
import { CookiesProvider } from "react-cookie";
import Toast from "./components/Toast.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <ThemeProvider>
        <Toast />
        <App />
      </ThemeProvider>
    </CookiesProvider>
  </StrictMode>
);
