import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";
import { AppRoutes } from "./routes/index.tsx";
import { AuthProvider } from "./contexts/authContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <ThemeProvider theme={appTheme}>
          <AppRoutes />
          <GlobalStyles />
          <ToastContainer
            theme={"dark"}
            autoClose={3000}
            closeOnClick={true}
            pauseOnHover={false}
            position={"top-right"}
            pauseOnFocusLoss={false}
          />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
