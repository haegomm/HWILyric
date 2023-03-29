export interface ISimilarityTypes {
  userLyricList: string[];
}

export interface ILyricBlockTypes {
  blockId: number;
  type: string;
  lyrics?: string;
}

export interface ILyricInfoTypes {
  id: string| null;
  title: string;
  thumnail: string;
  memo: string;
  lyricList : ILyricBlockTypes[];
}