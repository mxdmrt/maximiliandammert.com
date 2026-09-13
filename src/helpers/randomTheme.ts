import type { OklchColor, Theme } from "../@types/theme";

const randomOklch = (): OklchColor => {
  const lightnessMax = 100;
  const chromaMax = 0.37;
  const hueMax = 359;

  return {
    chroma: Math.round(Math.random() * 10000 * chromaMax) / 10000,
    hue: Math.round(Math.random() * 100 * hueMax) / 100,
    lightness: Math.round(Math.random() * 100 * lightnessMax) / 100,
  };
};

const getForegroundColor = (bgColor: Theme["background"]): OklchColor => {
  const threshold = 45;
  const lightness = bgColor.lightness;

  return lightness > threshold
    ? {
        chroma: 0,
        hue: 0,
        lightness: 12,
      }
    : {
        chroma: 0,
        hue: 0,
        lightness: 97,
      };
};

const createRandomTheme = (): Theme => {
  const bgColor = randomOklch();

  return {
    background: bgColor,
    foreground: getForegroundColor(bgColor),
    type: "random",
  };
};

export default createRandomTheme;
