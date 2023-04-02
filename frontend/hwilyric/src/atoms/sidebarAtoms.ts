import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist';

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
  