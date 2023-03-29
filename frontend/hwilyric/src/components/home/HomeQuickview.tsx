import React, { useEffect, useState } from "react";
import { useRecoilValue } from 'recoil'
import ScrollHorizontal from 'react-scroll-horizontal';
import { getLyricList } from "../../api/writingApi";

import { userNicknameAtom } from '../../atoms/userAtom'
import { ILyricInfoTypes } from "../../types/writingType";
import HomeQuickviewBlock from "./HomeQuickviewBlock";

function HomeQuickview() {
  const nickname = useRecoilValue(userNicknameAtom)
  const [lyrics, setLyrics] = useState([])
  const [nullLyrics, setNullLyrics] = useState('')
  
  useEffect(()  => {
    async function userLyricList() {
      const lyricList = await getLyricList()
      if (lyricList !== null) {
        setLyrics(lyricList)
        console.log('세팅완')        
      } else {
        console.log('')
        setNullLyrics('새로운 곡을 작사해보세요')
      }
    }
    userLyricList()
  }, [])
  return (
    <div id='scroll-horizontal' style={{ height: `30em` }}>
      <h3>{nickname}님의 작사노트</h3>
      <div>
        {nullLyrics ? 
        <div>
          {lyrics.map((lyric:ILyricInfoTypes) => (
            <HomeQuickviewBlock
              key={lyric.id}
              // name={lyric}
            /> 

          ))}

        </div>
        : nullLyrics}
      </div>
    </div>
  )
}

export default HomeQuickview
