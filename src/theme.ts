import { createTheme, type MantineColorsTuple } from "@mantine/core";

const cyan: MantineColorsTuple = [
  "#effcfc",
  "#d7f5f4",
  "#b4eae9",
  "#8fdede",
  "#7dd3d8",
  "#5fbec4",
  "#4aa6ac",
  "#398890",
  "#2b6b72",
  "#1e4f55",
];

export const theme = createTheme({
  fontFamily: '"Work Sans", system-ui, sans-serif',
  headings: {
    fontFamily: '"Outfit", system-ui, sans-serif',
    fontWeight: "600",
  },
  colors: { cyan },
  primaryColor: "cyan",
  primaryShade: 4,
  radius: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "28px",
  },
  defaultRadius: "lg",
  autoContrast: true,
});
