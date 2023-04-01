import React from 'react'
import { LyricListBodyItemDiv, LyricListHeader } from '../../styles/mypageStyle'

function MyPageListHeader() {
  return (
    <LyricListHeader>
      <LyricListBodyItemDiv width='200px' />
      <LyricListBodyItemDiv width='440px'>
        제목
      </LyricListBodyItemDiv>
      <LyricListBodyItemDiv width='160px'>
        작업시작일
      </LyricListBodyItemDiv>
      <LyricListBodyItemDiv width='160px'>
        최종시작일
      </LyricListBodyItemDiv>
      <LyricListBodyItemDiv width='160px' />
    </LyricListHeader>
  )
}

export default MyPageListHeader
