import { ILoginTypes } from '../types/apiType'
import { axios, fileAxios } from './https'

async function checkEmail(email:string) {
  try{
    const res = await axios.get(`api/auth/guests/email/${email}`)
    const message = res.data.message
    return message
  } catch(err) {
    console.log('이메일 중복 체크 안됐단다')
    console.log(err)
    return err
  }
}

async function checkNickname(nickname:string) {
  try{
    const res = await axios.get(`api/auth/guests/nickname/${nickname}`)
    const message = res.data.message
    return message
  } catch(err) {
    console.log('닉네임 중복 체크 안됐단다')
    console.log(err)
    return err
  }
}

async function verifyEmail(email:string) {
  try{
    const res = await axios.get(`api/auth/guests/check/${email}`)
    const code = res.data.code
    return code
  } catch(err) {
    console.log('인증메일 발송 안됐단다')
    return err
  }
}

async function signup(formData:FormData) {
  console.log(formData)
  try{
    const res = await fileAxios.post('api/auth/guests', formData)
    const message = res.data.message
    return message
  } catch(err) {
    console.log('가입 안됐단다')
    return err
  }
}

async function loginKakao(code: string) {
  try{
    const res = await axios.get(`api/auth/guests/kakao/${code}`);
    const data = res.data
    return data
  } catch(err) {
    console.log('카카오 안됐단다')
    console.log(err)
    return null
  }
  
}

async function login(body: ILoginTypes) {
  try{
    const res = await axios.post('api/auth/guests/login', body)
    const data = res.data
    return data
  } catch(err) {
    console.log('로그인 안됐단다')
    return null
  }
}

async function resetPassword(email: object) {
  try{
    const res = await axios.patch('api/auth/guests/password', email)
    const message = res.data.message
    return message
  } catch(err) {
    console.log('메일 못 보냇어용')
    return err
  }
}

async function checkPassword(password: object) {
  try{
    const res = await axios.post('api/auth/users/password', password)
    const message = res.data.message
    return message
  } catch(err) {
    console.log('비밀번호 틀렸대')
    return err
  }
}

async function modifyPassword(password: object) {
  try{
    const res = await axios.patch('api/auth/users/password', password)
    const message = res.data.message
    return message
  } catch(err) {
    console.log('비번 못바꿧어용')
    return err
  }
}

async function modifyProfile(formData: FormData) {
  try{
    const res = await fileAxios.patch('api/auth/users/profile', formData)
    const data = res.data
    return data
  } catch(err) {
    console.log('수정 안됐단다')
    return null
  }
}

async function reissueToken() {
  try{
    const res = await axios.get('api/auth/users/access-token')
    const accessToken = res.data.accessToken 
    return accessToken
  } catch(err) {
    console.log('토큰 재발급 안됐단다')
    return null
  }
}

async function logout() {
  try{
    const res = await axios.get('api/auth/users/logout')
    const message = res.data.message
    return message
  } catch(err) {
    console.log('로그아웃 안됐단다')
    return null
  }
}

const userApi = {
  checkEmail,
  checkNickname,
  checkPassword,
  verifyEmail,
  signup,
  loginKakao,
  login,
  resetPassword,
  modifyPassword,
  modifyProfile,
  reissueToken,
  logout,
}

export default userApi