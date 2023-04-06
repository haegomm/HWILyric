import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();


export const userEmailAtom = atom<string>({
  key: 'email',
  default: '',
});

export const userNicknameAtom = atom<string>({
  key: 'nickname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userProfileImgAtom = atom<string>({
  key: 'profileImg',
  default: '',
  effects_UNSTABLE: [persistAtom],
});


export const userPasswordAtom = atom<string>({
  key: 'password',
  default: '',
});

export const IsLoginAtom = atom<boolean>({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const IsKnownPassword = atom<boolean>({
  key: 'isKnownPassword',
  default: true,
})

export const selectModification = atom<string>({
  key: 'selectModification',
  default: 'select',
})