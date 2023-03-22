import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="*">홈으로</NavLink>
      </div>
      <div>
        <NavLink to="/write">작사하기</NavLink>
      </div>
      <div>
        <NavLink to="/login">로그인</NavLink>
      </div>
    </nav>
  )
}

export default Navbar