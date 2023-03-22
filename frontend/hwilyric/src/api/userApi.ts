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

const userApi = {
  checkEmail,
  checkNickname,
  verifyEmail,
  signup,
  loginKakao,
  login,
  resetPassword,
}

export default userApi