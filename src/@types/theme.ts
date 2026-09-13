export interface OklchColor {
  chroma: number;
  hue: number;
  lightness: number;
}

export interface Theme {
  background: OklchColor;
  foreground: OklchColor;
  type: ThemeType;
}

export type ThemeType = "dark" | "light" | "random";
