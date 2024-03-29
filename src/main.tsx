import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import LoadingBarWrapper from "./components/LoadingBarWrapper/LoadingBarWrapper";
import { RoutePages } from "./Router";
import PioneerProvider from "./context/usePioneer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PioneerProvider>
        <BrowserRouter>
          <LoadingBarWrapper>
            <RoutePages />
          </LoadingBarWrapper>
        </BrowserRouter>
      </PioneerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
