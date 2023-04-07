import { NavLink } from "react-router-dom"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { IsLoginAtom, userNicknameAtom } from "../../atoms/userAtom"
import { ToggleBoxWrapper, ToggleBox, ToggleBoxLabel } from '../../styles/toggleButton'
import { NavBox, NavMenu, DarkModeBox } from "../../styles/common/NavbarStyle";
import { isModifyingAtom } from "../../atoms/mypageAtom";
import { isDarkModeState } from "../../atoms/noteAtoms";
import { lightLogo, darkLogo} from "../../assets/home/navLogo"


function Navbar({toggleDarkMode}: any) {
  const isLogin = useRecoilValue(IsLoginAtom)
  const nickname = useRecoilValue(userNicknameAtom)
  const isDarkMode = useRecoilValue(isDarkModeState)
  const IsModifying = useResetRecoilState(isModifyingAtom)

  return (
    <nav>
      <NavBox>
        <NavLink to="*"  style={{ textDecoration: "none" }}><img src={isDarkMode ? darkLogo : lightLogo } style={{ width: '10vw' }} alt="loading" /></NavLink>
        <NavMenu>
          <DarkModeBox>
            <BsFillSunFill  style={{ color: isDarkMode ? "#003458" : "#ffd700" }}/>
            <ToggleBoxWrapper>
                <ToggleBox id="checkbox" type="checkbox" onClick={toggleDarkMode} />
                <ToggleBoxLabel htmlFor="checkbox" />
            </ToggleBoxWrapper>
            <BsFillMoonFill style={{ color: isDarkMode ? "#ffd700" : "#003458" }}/>  
          </DarkModeBox>
          <div>
            <NavLink to="/write"  style={{ textDecoration: "none" }} onClick={IsModifying}>작사하기</NavLink>
          </div>
          <div>
            {isLogin ? (
              <NavLink to='/mypage'  style={{ textDecoration: "none" }}>{nickname}님</NavLink>
              ) : (
                <NavLink to="/login"  style={{ textDecoration: "none" }}>로그인</NavLink>
                )}
          </div>
        </NavMenu>
        
      </NavBox>
    </nav>
  )
}

export default Navbar