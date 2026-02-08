import { DateTime } from "luxon";
import { create } from "zustand";

import type { Theme } from "../@types/theme";
import { darkTheme, lightTheme } from "../helpers/theme";

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isScrolled: boolean;
  setIsScrolled: (boolean: boolean) => void;
  greeting: string;
}

const timeNow = DateTime.now().hour;
const greetStringMorning = ["Morning", "Good morning"];
const greetStringDay = ["Moin", "Hi", "Hello", "Hey", "Hi there"];
const greetStringEvening = ["Good evening"];
const greetStringNight = ["Greetings night owl"];

const createGreeting = (): string => {
  if (0 <= timeNow && timeNow < 5) {
    return greetStringNight[
      Math.floor(Math.random() * greetStringNight.length)
    ];
  } else if (4 < timeNow && timeNow < 11) {
    return greetStringMorning[
      Math.floor(Math.random() * greetStringMorning.length)
    ];
  } else if (10 < timeNow && timeNow < 18) {
    return greetStringDay[Math.floor(Math.random() * greetStringDay.length)];
  } else {
    return greetStringEvening[
      Math.floor(Math.random() * greetStringEvening.length)
    ];
  }
};

export const useStore = create<Store>()((set) => ({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? darkTheme
    : lightTheme,
  setTheme: (theme) => set(() => ({ theme: theme })),
  isScrolled: false,
  setIsScrolled: (boolean) => set(() => ({ isScrolled: boolean })),
  greeting: createGreeting(),
}));
