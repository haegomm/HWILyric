export interface ISimilarityTypes {
  userLyricList: [string];
}

export interface ILyricBlockTypes {
  type: string;
  lyrics: string;
}

export interface ILyricInfoTypes {
  id: string;   
  title: string;    
  thumnail: string;
  memo: string;
  lyricList: [ILyricBlockTypes]
}