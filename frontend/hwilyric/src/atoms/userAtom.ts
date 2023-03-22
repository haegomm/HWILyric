import { atom } from 'recoil';


const userEmailAtom = atom<string>({
  key: 'email',
  default: '',
});

const userNicknameAtom = atom<string>({
  key: 'nickname',
  default: '',
});

const userProfileImgAtom = atom<string>({
  key: 'profileImg',
  default: '',
});

const userPasswordAtom = atom<string>({
  key: 'password',
  default: '',
});

const IsLoginAtom = atom<boolean>({
  key: 'isLogin',
  default: false,
});

const IsKnownPassword = atom<boolean>({
  key: 'isKnownPassword',
  default: true,
})

interface UserInfoTypes {
  userType : string;
  email: string;
  nickname: string;
  profileImg: string;
}

const userInfoAtom = atom<UserInfoTypes[]>({
  key: 'userInfo',
  default: [
    {
      userType: '',
      email: '',
      nickname: '',
      profileImg: '',
    },
  ],
});

const userAtom = {
  userEmailAtom,
  userNicknameAtom,
  userProfileImgAtom,
  userPasswordAtom,
  IsLoginAtom,
  IsKnownPassword,
  userInfoAtom,
}


export default userAtom