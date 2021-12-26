import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./src/theme";

render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  document.querySelector("#app")
);
