export type ThemeType = "light" | "dark" | "random";

export type HslColor = {
  hue: number;
  saturation: number;
  lightness: number;
};

export type Theme = {
  type: ThemeType;
  background: HslColor;
  foreground: HslColor;
};
