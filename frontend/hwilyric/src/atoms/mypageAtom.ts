import { atom } from 'recoil';
import { ICategoryTypes } from '../types/mypageType';

export const lyricCategoryAtom = atom<string>({
  key: 'categoty',
  default: '',
});