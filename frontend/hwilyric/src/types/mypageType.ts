import { ILyricBlockTypes } from "./writingType";

export interface ICategoryTypes {
  name: string;
  state: string;
}

export interface IGetILyricInfoTypes {
  id: string| undefined;
  title: string;
  thumbnail: string;
  memo: string;
  lyricList : ILyricBlockTypes[];
  createdDate: string;
  updatedDate: string;
}

export interface IFilteringLyricTypes {
  blockId: string;
  lyrics: string;
  type: string;
}