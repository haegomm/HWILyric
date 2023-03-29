export interface IBlockData {
    blockId: number,
    type?: string,
    lyrics?: string,
}

export interface ISaveNoteType {
    id: string| null
    title: string
    thumnail: string
    memo: string
    lyricList : IBlockData[]
}