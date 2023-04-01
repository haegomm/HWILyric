import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist';
import { ISimilarInfoTypes } from "../types/writingType"

const { persistAtom } = recoilPersist();

export const memoState = atom<string>({
    key: "memoState",
    default: "",
    effects_UNSTABLE: [persistAtom],
})

export const similarListState = atom<ISimilarInfoTypes[]>({
    key: "similarListState",
    default: [],
})

// export const similarItemState = atom<>({

// })