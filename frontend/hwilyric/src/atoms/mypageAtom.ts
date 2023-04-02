import { atom } from 'recoil';
import { ICategoryTypes } from '../types/mypageType';
import { IGetILyricInfoTypes } from '../types/mypageType';

export const lyricCategoryAtom = atom<string>({
  key: 'categoty',
  default: '',
});

export const myLyrics = atom<IGetILyricInfoTypes[]|null>({
  key: 'myLyrics',
  default: null,
})