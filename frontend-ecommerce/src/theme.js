import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  cursorType: "pointer",
  primaryColor: "red",
  autoContrast: true,
  defaultGradient: {
    from: "primary.6",
    to: "primary.9",
    deg: 20,
  },
  breakpoints: {
    s: "26em",
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  colors: {
    primary: [
      "#ffe9e9",
      "#ffd1d1",
      "#fba0a1",
      "#f76d6d",
      "#f34141",
      "#f22625",
      "#f21616",
      "#d8070b",
      "#c10008",
      "#a90003",
    ],
    background: ["#f0f"],
    text: ["#fff"],
  },
});
