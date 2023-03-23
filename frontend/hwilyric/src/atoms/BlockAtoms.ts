import { atom } from "recoil"

export interface BlockTypes {
    index: number,
    type: string,
    lyrics: Array<string>,
}

export const blockList = atom<BlockTypes[]>({
    key: 'blockList',
    default: []
})