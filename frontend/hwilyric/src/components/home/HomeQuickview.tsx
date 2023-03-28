import React, { useEffect, useState } from "react";
import { useRecoilValue } from 'recoil'
import writingApi from "../../api/writingApi";

import userAtom from '../../atoms/userAtom'
import { ILyricInfoTypes } from "../../types/writingType";
import HomeQuickviewBlock from "./HomeQuickviewBlock";

function HomeQuickview() {
  const nickname = useRecoilValue(userAtom.userNicknameAtom)
  const [lyrics, setLyrics] = useState([])
  const [nullLyrics, setNullLyrics] = useState('')
  
  useEffect(()  => {
    async function getLyricList() {
      const lyricList = await writingApi.lyricList()
      if (lyricList !== null) {
        setLyrics(lyricList)
        console.log('세팅완')        
      } else {
        console.log('')
        setNullLyrics('새로운 곡을 작사해보세요')
      }
    }
    getLyricList()
  }, [])
  return (
    <div>
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
