import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "red",
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSize: "1.2rem",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const GlobalStyle = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalStyle;
