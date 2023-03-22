import { axios, fileAxios } from './https'
import { SignupTypes } from '../types/apiType'


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

const userApi = {
  checkEmail,
  checkNickname,
  verifyEmail,
  signup,
}

export default userApi