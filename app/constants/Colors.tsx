export const Colors = {
  background: "#F5F7FA",
  primary: "#0D47A1",
  secondary: "#1976D2",
  greyText: "#263238",
  errorRed: "#C62828",
} as const;

export type ColorsType = typeof Colors;

export default Colors;
