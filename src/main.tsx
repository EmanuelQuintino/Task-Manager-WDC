import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";
import { AppRoutes } from "./routes/index.tsx";
import { AuthProvider } from "./contexts/useAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
