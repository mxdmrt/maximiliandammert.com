export type ThemeType = "light" | "dark" | "random";

export type Theme = {
  type: ThemeType;
  background: [number, number, number];
  foreground: [number, number, number];
};
