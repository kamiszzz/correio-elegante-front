import React from "react";
import ReactDOM from "react-dom/client";

import { indigo } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProvider, LoggedUserProvider } from "./contexts";

import { App } from "./App";
import "./styles/global.css";

const theme = createTheme({
  palette: {
    primary: indigo,
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <LoggedUserProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </LoggedUserProvider>
    </AppProvider>
  </React.StrictMode>
);
