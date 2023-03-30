import { NavLink } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';


import { IsLoginAtom, userNicknameAtom } from "../../atoms/userAtom"
import { ToggleBoxWrapper, ToggleBox, ToggleBoxLabel } from '../../styles/toggleButton'

function Navbar({toggleDarkMode}: any) {
  const isLogin = useRecoilValue(IsLoginAtom)
  const nickname = useRecoilValue(userNicknameAtom)
  return (
    <nav>
      <div>
        <NavLink to="*">홈으로</NavLink>
      </div>
      <div>
        <NavLink to="/write">작사하기</NavLink>
      </div>
      <div>
        {isLogin ? (
          <NavLink to='/mypage'>{nickname}님</NavLink>
        ) : (
          <NavLink to="/login">로그인</NavLink>
        )}
      </div>
      <BsFillSunFill />
      <ToggleBoxWrapper>
          <ToggleBox id="checkbox" type="checkbox" onClick={toggleDarkMode} />
          <ToggleBoxLabel htmlFor="checkbox" />
      </ToggleBoxWrapper>
      <BsFillMoonFill />
    </nav>
  )
}

export default Navbar