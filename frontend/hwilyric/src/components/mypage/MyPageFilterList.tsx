import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { IconImage, LyricListBody, LyricListBodyItem, LyricListBodyItemContent, LyricListBodyItemDiv, LyricText, LyricThumbnail } from '../../styles/mypageStyle'
import { getLyricList } from '../../api/writingApi'
import { IFilteringLyricTypes, IGetILyricInfoTypes } from '../../types/mypageType'
import { isModifyingAtom, lyricCategoryAtom } from '../../atoms/mypageAtom'
import { deleteNote } from '../../api/deleteApit'
import { lightDelete, lightModify, lightView } from '../../assets/icon/myButtons'
import { ILyricBlockTypes } from '../../types/writingType'
import { useNavigate } from 'react-router-dom'

function MyPageFilterList() {
  const navigate = useNavigate();
  const [myLyrics, setMyLyrics] = useState([])
  const [nullLyrics, setNullLyrics] = useState('')

  const currentCategory = useRecoilValue(lyricCategoryAtom)
  const setIsModifying = useSetRecoilState(isModifyingAtom)

  async function getMyLyrics() {
    const lyricList = await getLyricList()
    if (lyricList !== null) {
      const sortedLyrics = lyricList.slice(0).sort((a: IGetILyricInfoTypes, b: IGetILyricInfoTypes) => {
        return new Date(b.updatedDate).valueOf() - new Date(a.updatedDate).valueOf();})
        setMyLyrics(sortedLyrics)
    } else {
      console.log('')
      setNullLyrics('해당 카테고리의 가사가 없습니다')
    }
  }

  useEffect(() => {
    getMyLyrics()
  }, [currentCategory])

    const onModifyHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    const noteId = e.currentTarget.id
    navigate(`/modify/${noteId}`)
    setIsModifying(true)
  }

  const onDeleteHandler = async (e: React.MouseEvent<HTMLImageElement>) => {
    if (window.confirm(`${e.currentTarget.alt}을(를) 삭제하시겠습니까?`)) {
      const noteId = e.currentTarget.id
      const res = await deleteNote(noteId)
      if (res !== null) {
        alert('삭제가 완료되었습니다')
        getMyLyrics()
      } else {
        alert('삭제가 실패했습니다. 다시 한 번 시도해주세요')
      }
    } else {
      return false
    }
  }

  return (
    <LyricListBody>
      {nullLyrics === '' ?
            <div>
            {myLyrics.map((myLyric:IGetILyricInfoTypes) => (
              myLyric.lyricList.map((lyricCtgr: ILyricBlockTypes) => {
                if (lyricCtgr.type === currentCategory) {
                  return (
                    <LyricListBodyItem key={myLyric.id}>
                      <LyricListBodyItemDiv width='10vw'>
                        <LyricThumbnail src={myLyric.thumbnail} />
                      </LyricListBodyItemDiv>
                      <LyricListBodyItemContent id={myLyric.id} onClick={onModifyHandler}>
                        <LyricText width='16vw'>
                          {myLyric.title}
                        </LyricText>                                 
                        <LyricText width='18vw'>
                          {lyricCtgr.lyrics}
                        </LyricText>
                      </LyricListBodyItemContent>
                      <LyricListBodyItemDiv width='10vw'>
                        {myLyric.createdDate.substring(0, 10)}
                      </LyricListBodyItemDiv>
                      <LyricListBodyItemDiv width='10vw'>
                        {myLyric.updatedDate.substring(0, 10)}
                      </LyricListBodyItemDiv>
                      <LyricListBodyItemDiv width='10vw'>
                        {/* <IconImage src={lightView} id={myLyric.id} onClick={onDeleteHandler}/> */}
                        <IconImage src={lightModify} id={myLyric.id} onClick={onModifyHandler}/>
                        <IconImage src={lightDelete} id={myLyric.id} alt={myLyric.title} onClick={onDeleteHandler}/>
                      </LyricListBodyItemDiv>
                    </LyricListBodyItem>
                  )
                }
              }
              )
            ))}
            </div>
            : 
            <LyricListBodyItem>
              {nullLyrics}
            </LyricListBodyItem> }
      </LyricListBody>
  )
}

export default MyPageFilterList
