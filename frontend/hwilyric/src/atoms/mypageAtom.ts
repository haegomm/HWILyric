import { atom } from 'recoil';
import { ICategoryTypes } from '../types/mypageType';
import { IGetILyricInfoTypes } from '../types/mypageType';

export const lyricCategoryAtom = atom<string>({
  key: 'categoty',
  default: '',
});

export const isModifyingAtom = atom<boolean>({
  key: 'isModifying',
  default: false,
})