import React from 'react'
import { NotLoggedInBlock, QuickView, QuickViewBody, QuickviewHeader } from '../../styles/homeStyle'
import { Link } from 'react-router-dom'
import { LoginRecButton } from '../../styles/recommendStyle'

function HomeNotLoggedIn() {


  return (
    <QuickView>
      <NotLoggedInBlock>
        <p>아직 로그인을 하지 않으셨어요!</p>
        <p>로그인하고 더 많은 기능을 이용해보세요</p>
        <Link to="/login">
          <LoginRecButton>로그인</LoginRecButton>
        </Link>
      </NotLoggedInBlock>
    </QuickView>
  )
}

export default HomeNotLoggedIn