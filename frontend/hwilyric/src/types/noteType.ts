export interface IBlockData {
    id: number,
    type?: string,
    lyrics?: string,
}

export interface ISaveNoteType {
    userId: string| null
    title: string
    thumnail: string
    memo: string
    blockList : IBlockData[]
}