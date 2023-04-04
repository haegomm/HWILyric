import React from 'react'
import { HomeCenterImgContainer, HomeImg, HomeProfileImg, HomeProfileImgBox } from '../../styles/homeStyle'
import { vinylColorDodge } from '../../assets/home/vinyl'
import { useRecoilValue } from 'recoil'
import { IsLoginAtom, userProfileImgAtom } from '../../atoms/userAtom'
import { upArrow } from '../../assets/icon/arrow'
import socailLoginButton from '../../assets/socialLogin/socialLoginButton'

function HomeCenterImg() {
  const isLogin = useRecoilValue(IsLoginAtom)
  const profileImgUrl = useRecoilValue(userProfileImgAtom)
  return (
    <HomeCenterImgContainer>
      <HomeImg src={vinylColorDodge} />
      <HomeProfileImgBox>
        {isLogin ? 
          <HomeProfileImg src={profileImgUrl} />
          :
          <HomeProfileImg src={socailLoginButton} />
        }
      </HomeProfileImgBox>
    </HomeCenterImgContainer>
  )
}

export default HomeCenterImg
