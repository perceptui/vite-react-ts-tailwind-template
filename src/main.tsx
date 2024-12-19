import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./hook/use-theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute={["class", "data-theme"]}
      defaultTheme="dark"
      enableSystem={true}
      enableColorScheme={true}
      themes={["light", "dark"]}
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
