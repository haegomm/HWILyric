import { atom } from 'recoil';
import { ICategoryTypes } from '../types/mypageType';

export const lyricCategoryAtom = atom<ICategoryTypes>({
  key: 'categoty',
  default: {name: '전체', state: ''},
});