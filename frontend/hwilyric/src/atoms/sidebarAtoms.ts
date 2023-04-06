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

export const keywordModeAtom = atom<string>({
    key: 'kewordMode',
    default: 'similar',
})

export const keywordListAtom = atom<[]>({
    key: 'keywordList',
    default: []
})

export const getErrorMessageAtom = atom<string>({
    key: 'getErrorMessage',
    default: '키워드를 검색해주세요'
})

export const similarResultState = atom<boolean>({
    key: "similarResultState",
    default: false,
})

export const isLoadingState = atom<boolean>({
    key: "isLoadingState",
    default: false,
})