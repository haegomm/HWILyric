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
  userInfoAtom,
}


export default userAtom