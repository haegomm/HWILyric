import { atom } from 'recoil';

export const lyricCategoryAtom = atom<string>({
  key: 'categoty',
  default: '',
});

export const isModifyingAtom = atom<boolean>({
  key: 'isModifying',
  default: false,
})

export const isTempAtom = atom<boolean>({
  key: 'isTemp',
  default: true,
})

export const isRecommendAtom = atom<boolean>({
  key: 'isRecommend',
  default: false,
})