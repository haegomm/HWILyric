import { atom } from "recoil";
import { IAnnualGenreChart, IAnnualGenreRatio } from "../types/visualizingType";

export const totalTrendAtom = atom<IAnnualGenreChart>({
  key: "totalTrend",
  default: {},
});

export const annualGenreRatioAtom = atom<IAnnualGenreRatio>({
  key: "annualGenreRatio",
  default: {},
});
