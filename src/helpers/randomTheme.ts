import { HslColor, Theme } from "../@types/theme";

const randomHsl = (): HslColor => {
  const hueMax = 359;
  const saturationMax = 100;
  const lightnessMax = 100;

  return {
    hue: Math.floor(Math.random() * hueMax),
    saturation: Math.floor(Math.random() * saturationMax),
    lightness: Math.floor(Math.random() * lightnessMax),
  };
};

const getForegroundColor = (bgColor: Theme["background"]): HslColor => {
  const threshold = 45;
  const lightness = bgColor.lightness;

  return lightness > threshold
    ? {
        hue: 0,
        saturation: 0,
        lightness: 12,
      }
    : {
        hue: 0,
        saturation: 0,
        lightness: 94,
      };
};

export const createRandomTheme = (): Theme => {
  const bgColor = randomHsl();

  return {
    type: "random",
    background: bgColor,
    foreground: getForegroundColor(bgColor),
  };
};
