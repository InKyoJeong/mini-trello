import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import App from "./src/App";

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#app")
);
