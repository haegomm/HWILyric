import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getLyricList } from "../../api/writingApi";

import { userNicknameAtom } from '../../atoms/userAtom'
import { ILyricInfoTypes } from "../../types/writingType";
import HomeQuickviewBlock from "./HomeQuickviewBlock";
import { QuickView, QuickViewBlock, QuickViewBlockCover, QuickViewBlockImg, QuickViewBlockItem, QuickViewBody, QuickviewHeader, QuickviewHeaderSpan } from "../../styles/homeStyle";
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
      <QuickviewHeader>
        <QuickviewHeaderSpan>{nickname}</QuickviewHeaderSpan>
        <span>님의 작사노트</span>
      </QuickviewHeader>
        {(nullLyrics === '') ? 
        <QuickViewBody>
          {myLyrics.map((lyric:ILyricInfoTypes) => (
            <QuickViewBlock key={lyric.id} id={lyric.id} width='17vw' onClick={onModifyHandler}>
              <QuickViewBlockItem width='3vw'>
                <QuickViewBlockCover>
                  <QuickViewBlockImg src={lyric.thumbnail} />
                </QuickViewBlockCover>
              </QuickViewBlockItem>
              <QuickViewBlockItem width='10vw'>
                <p>{lyric.title}</p>
              </QuickViewBlockItem>
            </QuickViewBlock>
          ))}
        </QuickViewBody>
        : nullLyrics}
    </QuickView>
  )
}

export default HomeQuickview
