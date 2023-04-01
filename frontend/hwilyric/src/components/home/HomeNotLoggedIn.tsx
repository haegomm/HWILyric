import React from 'react'
import { QuickView } from '../../styles/homeStyle'
import { Link } from 'react-router-dom'

function HomeNotLoggedIn() {


  return (
    <QuickView>
      <p>아직 로그인을 하지 않으셨어요!</p>
      <p>로그인하고 더 많은 기능을 이용해보세요</p>
      <Link to="/login/dlkfjsaldkfj">
        <div>로그인</div>
      </Link>
    </QuickView>
  )
}

export default HomeNotLoggedIn