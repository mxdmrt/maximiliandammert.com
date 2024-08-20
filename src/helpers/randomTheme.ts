import { OklchColor, Theme } from "../@types/theme";

const randomOklch = (): OklchColor => {
  const lightnessMax = 100;
  const chromaMax = 0.37;
  const hueMax = 359;

  return {
    lightness: Math.round(Math.random() * 100 * lightnessMax) / 100,
    chroma: Math.round(Math.random() * 10000 * chromaMax) / 10000,
    hue: Math.round(Math.random() * 100 * hueMax) / 100,
  };
};

const getForegroundColor = (bgColor: Theme["background"]): OklchColor => {
  const threshold = 45;
  const lightness = bgColor.lightness;

  return lightness > threshold
    ? {
        lightness: 12,
        chroma: 0,
        hue: 0,
      }
    : {
        lightness: 97,
        chroma: 0,
        hue: 0,
      };
};

const createRandomTheme = (): Theme => {
  const bgColor = randomOklch();

  return {
    type: "random",
    background: bgColor,
    foreground: getForegroundColor(bgColor),
  };
};

export default createRandomTheme;
