import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getLyricList } from "../../api/writingApi";

import { userNicknameAtom } from '../../atoms/userAtom'
import { ILyricInfoTypes } from "../../types/writingType";
import HomeQuickviewBlock from "./HomeQuickviewBlock";
import { QuickView, QuickViewBlock, QuickViewBlockImg } from "../../styles/homeStyle";
import { IGetILyricInfoTypes } from "../../types/mypageType";
import { useNavigate } from "react-router-dom";
import { isModifyingAtom } from "../../atoms/mypageAtom";

function HomeQuickview() {
  const navigate = useNavigate();

  const nickname = useRecoilValue(userNicknameAtom)
  const setIsModifying = useSetRecoilState(isModifyingAtom)
  const [nullLyrics, setNullLyrics] = useState('')
  const [myLyrics, setMyLyrics] = useState([])

  async function getMyLyrics() {
    const lyricList = await getLyricList()
    if (lyricList !== null) {
      const sortedLyrics = lyricList.slice(0).sort((a: IGetILyricInfoTypes, b: IGetILyricInfoTypes) => {
        return new Date(b.updatedDate).valueOf() - new Date(a.updatedDate).valueOf();})
      setMyLyrics(sortedLyrics)
      console.log('뽑아왔어용', sortedLyrics)
      setNullLyrics('')
    } else {
      console.log('')
      setNullLyrics('새로운 곡을 작사해보세요')
    }
  }

  const onModifyHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    const noteId = e.currentTarget.id
    navigate(`/modify/${noteId}`)
    setIsModifying(true)
  }
  
  useEffect(()  => {
      getMyLyrics()
      console.log(myLyrics)
  }, [])

  return (
    <QuickView>
      <h3>{nickname}님의 작사노트</h3>
        {(nullLyrics === '') ? 
        <div>
          {myLyrics.map((lyric:ILyricInfoTypes) => (
            <QuickViewBlock key={lyric.id} width='100%' onClick={onModifyHandler}>
              <QuickViewBlockImg src={lyric.thumbnail} />
              <QuickViewBlock width='76%'>
                <p>{lyric.title}</p>
              </QuickViewBlock>
            </QuickViewBlock>
          ))}
        </div>
        : nullLyrics}
    </QuickView>
  )
}

export default HomeQuickview
