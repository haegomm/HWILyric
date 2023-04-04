import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist';
import { ISimilarInfoTypes } from "../types/writingType"

const { persistAtom } = recoilPersist();

export const memoState = atom<string>({
    key: "memoState",
    default: "",
    effects_UNSTABLE: [persistAtom],
})

export const sidebarCategoryAtom = atom<string>({
    key: 'sidbarCategoty',
    default: '',
  });
  
export const similarListState = atom<ISimilarInfoTypes[]>({
    key: "similarListState",
    default: [],
})

export const similarListLengthState = atom<number>({
    key: "similarListLengthState",
    default: 0,
})

export const checkLoadingState = atom<boolean>({
    key: "checkLoadingState",
    default: false,
})
