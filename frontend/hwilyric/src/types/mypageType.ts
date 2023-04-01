import { ILyricBlockTypes } from "./writingType";

export interface ICategoryTypes {
  name: string;
  state: string;
}

export interface IGetILyricInfoTypes {
  id: string| null;
  title: string;
  thumbnail: string;
  memo: string;
  lyricList : ILyricBlockTypes[];
  createdDate: string;
  updatedDate: string;
}