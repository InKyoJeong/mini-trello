import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import App from "./src/App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.querySelector("#app")
);
