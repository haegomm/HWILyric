import { atom } from "recoil"
import { IBlockData } from "../types/noteType"

export const noteIdState = atom<string | null>({
    key: "noteIdState",
    default: null
})

export const titleState = atom<string>({
    key: "titleState",
    default: "무제"
})

export const blockIdState = atom<number>({
    key: 'blockIdState',
    default: 0
})

export const blockListState = atom<IBlockData[]>({
    key: 'blockListState',
    default: []
})