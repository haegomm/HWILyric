import React from 'react'
import { HomeCenterImgContainer, HomeImg, HomeProfileBackground, HomeProfileImg, HomeProfileImgBox } from '../../styles/homeStyle'
import { vinylColorDodge } from '../../assets/home/vinyl'
import { useRecoilValue } from 'recoil'
import { IsLoginAtom, userProfileImgAtom } from '../../atoms/userAtom'
import { defaultImg, lightBackground } from '../../assets/icon/profileDefault'

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
          <HomeProfileImg src={defaultImg} />
        }
        <HomeProfileBackground src={lightBackground} />
      </HomeProfileImgBox>
    </HomeCenterImgContainer>
  )
}

export default HomeCenterImg
