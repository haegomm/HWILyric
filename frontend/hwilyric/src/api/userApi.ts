import axios from './https'
import { SignupTypes } from '../types/apiType'

const makeGetRequest = async (endpoint: string, data: object) => {
  return await axios.get(endpoint, data);
};

type emailtest = {"email": string}
async function checkEmail(emailcheck:string) {
  // const email = emailcheck
  // console.log('이메일체크',emailcheck)
  // const emailJson = JSON.stringify(email)
  // console.log(emailJson)
  try{
    // const body = {"email": params}
    const res = await makeGetRequest(`api/auth/guests/email/${emailcheck}`, {emailcheck})
    console.log(res)
  } catch(err) {
    console.log('이메일 중복 체크 안됐단다')
    console.log(emailcheck)
    console.log(err)
  }
}



// async function checkEmail(params:string) {
//   try{
//     type email = string
//     const body = {"email": params}
//     const res = await makeGetRequest('api/auth/guests/email', {body})
//     console.log(res)
//   } catch(err) {
//     console.log('이메일 중복 체크 안됐단다')
//     console.log({email: params})
//     console.log(err)
//   }
// }

async function checkNickname(params:string) {
  try{
    const data = await axios.get('api/auth/guests/nickname')
  } catch(err) {
    console.log('닉네임 중복 체크 안됐단다')
    console.log(params)
  }
}

async function verifyEmail(params:string) {
  try{
    const data = await axios.get('api/auth/guests/check')
  } catch(err) {
    console.log('인증메일 발송 안됐단다')
    console.log(params)
  }
}

async function signup(params:SignupTypes) {
  const data = await axios.post('api/auth/guests')
  return data
}

const userApi = {
  checkEmail,
  checkNickname,
  verifyEmail,
  signup,
}

export default userApi