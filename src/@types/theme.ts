export type ThemeType = "light" | "dark" | "random";

export type OklchColor = {
  lightness: number;
  chroma: number;
  hue: number;
};

export type Theme = {
  type: ThemeType;
  background: OklchColor;
  foreground: OklchColor;
};
