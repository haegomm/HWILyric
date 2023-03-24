import { atom } from "recoil"

export const titleState = atom<string>({
    key: "titleState",
    default: "무제"
})

export const blockIdState = atom<number>({
    key: 'blockIdState',
    default: 0
})

export interface BlockData {
    index: number,
    type?: string,
    lyrics?: Array<string>,
}

export const blockListState = atom<BlockData[]>({
    key: 'blockListState',
    default: []
})