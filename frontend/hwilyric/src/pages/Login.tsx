import { useRecoilValue } from "recoil"

import LoginInput from "../components/login/LoginInput"
import LoginForgetPassword from "../components/login/LoginForgetPassword"
import userAtom from "../atoms/userAtom"

function Login() {
  const isKnownPassword = useRecoilValue(userAtom.IsKnownPassword)

  return (
      <div>
        {isKnownPassword ? (
          <LoginInput />
        ) : (
          <LoginForgetPassword />
        )}
      </div>
  )
}

export default Login