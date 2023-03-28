import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();


const userEmailAtom = atom<string>({
  key: 'email',
  default: '',
});

const userNicknameAtom = atom<string>({
  key: 'nickname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

const userProfileImgAtom = atom<string>({
  key: 'profileImg',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

const userPasswordAtom = atom<string>({
  key: 'password',
  default: '',
});

const IsLoginAtom = atom<boolean>({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

const IsKnownPassword = atom<boolean>({
  key: 'isKnownPassword',
  default: true,
})

const selectModificationPage = atom<string>({
  key: 'selectModificationPage',
  default: 'select',
})

const userAtom = {
  userEmailAtom,
  userNicknameAtom,
  userProfileImgAtom,
  userPasswordAtom,
  IsLoginAtom,
  IsKnownPassword,
  selectModificationPage,
}


export default userAtom