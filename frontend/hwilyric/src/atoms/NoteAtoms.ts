import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist';
import { IBlockData } from "../types/noteType"

const { persistAtom } = recoilPersist();

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const id = `${year}${month}${day}${hour}${minute}`;
    return Number(id);
  }

export const noteIdState = atom<string | null>({
    key: "noteIdState",
    default: null,
    effects_UNSTABLE: [persistAtom],
})

export const titleState = atom<string>({
    key: "titleState",
    default: "무제",
    effects_UNSTABLE: [persistAtom],
})

export const blockIdState = atom<number>({
    key: 'blockIdState',
    default: getCurrentDateTime()
})

export const blockListState = atom<IBlockData[]>({
    key: 'blockListState',
    default: [],
    effects_UNSTABLE: [persistAtom],
})