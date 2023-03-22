import { useRecoilValue } from "recoil"

import LoginInput from "../components/login/LoginInput"
import LoginForgetPassword from "../components/login/LoginForgetPassword"
import userAtom from "../atoms/userAtom"

function Login() {
  const isKnownPassword = useRecoilValue(userAtom.IsKnownPassword)

  return (
      <div>
        <h1>로그인 페이지 입니다.</h1>
        {isKnownPassword ? (
          <LoginInput />
        ) : (
          <LoginForgetPassword />
        )}
      </div>
  )
}

export default Login