import React from 'react'
import { LyricListBodyItemDiv, LyricListHeader } from '../../styles/mypageStyle'

function MyPageListHeader() {
  return (
    <LyricListHeader>
      <LyricListBodyItemDiv width='10vw' />
      <LyricListBodyItemDiv width='20vw'>
        제목
      </LyricListBodyItemDiv>
      <LyricListBodyItemDiv width='10vw'>
        작업시작일
      </LyricListBodyItemDiv>
      <LyricListBodyItemDiv width='10vw'>
        최종작업일
      </LyricListBodyItemDiv>
      <LyricListBodyItemDiv width='10vw' />
    </LyricListHeader>
  )
}

export default MyPageListHeader
