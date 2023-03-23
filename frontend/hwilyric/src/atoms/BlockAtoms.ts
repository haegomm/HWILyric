import { atom } from "recoil"

export interface BlockTypes {
    index: number,
    type: string,
    lyrics: Array<string>,
}

export const blockId = atom<number>({
    key: 'blockId',
    default: 0
})

export const lyricsList = atom<BlockTypes[]>({
    key: 'lyrics',
    default: []
})