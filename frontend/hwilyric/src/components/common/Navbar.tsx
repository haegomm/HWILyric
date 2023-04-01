import { NavLink } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';


import { IsLoginAtom, userNicknameAtom } from "../../atoms/userAtom"
import { ToggleBoxWrapper, ToggleBox, ToggleBoxLabel } from '../../styles/toggleButton'
import { NavBox, NavMenu } from "../../styles/common/NavbarStyle";

function Navbar({toggleDarkMode}: any) {
  const isLogin = useRecoilValue(IsLoginAtom)
  const nickname = useRecoilValue(userNicknameAtom)
  return (
    <nav>
      <NavBox>
        <NavMenu>
          <div>
              <NavLink to="*"  style={{ textDecoration: "none" }}>홈으로</NavLink>
            </div>
          <div>
            <NavLink to="/write"  style={{ textDecoration: "none" }}>작사하기</NavLink>
          </div>
          <div>
            {isLogin ? (
              <NavLink to='/mypage'  style={{ textDecoration: "none" }}>{nickname}님</NavLink>
              ) : (
                <NavLink to="/login"  style={{ textDecoration: "none" }}>로그인</NavLink>
                )}
          </div>
        </NavMenu>
        <BsFillSunFill />
        <ToggleBoxWrapper>
            <ToggleBox id="checkbox" type="checkbox" onClick={toggleDarkMode} />
            <ToggleBoxLabel htmlFor="checkbox" />
        </ToggleBoxWrapper>
        <BsFillMoonFill />
      </NavBox>
    </nav>
  )
}

export default Navbar