export type ThemeType = "light" | "dark" | "random";

export interface OklchColor {
  lightness: number;
  chroma: number;
  hue: number;
}

export interface Theme {
  type: ThemeType;
  background: OklchColor;
  foreground: OklchColor;
}
