export interface ISimilarityTypes {
  userLyric: string[];
}

export interface ILyricBlockTypes {
  blockId: number;
  type: string;
  lyrics?: string;
}

export interface ILyricInfoTypes {
  id: string| null;
  title: string;
  thumbnail: string;
  memo: string;
  lyricList : ILyricBlockTypes[];
}