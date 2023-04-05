import React, { useEffect } from 'react'
import { WriteBox } from "../styles/writeStyle"
import WriteNote from "../components/write/WriteNote"
import WriteSidebar from "../components/write/WriteSidebar"
import { useParams } from "react-router-dom"
import { getLyricInfo } from '../api/writingApi'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { blockListState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, titleState } from '../atoms/noteAtoms'
import { memoState } from '../atoms/sidebarAtoms'
import { IsLoginAtom } from '../atoms/userAtom'
import { isModifyingAtom, isTempAtom } from '../atoms/mypageAtom'

function Write() {
  const params = useParams();

  const isLogin = useRecoilValue(IsLoginAtom)
  const isModifying = useRecoilValue(isModifyingAtom)
  const [isTemp, setIsTemp] = useRecoilState(isTempAtom)

  const title = useRecoilValue(titleState)

  const setNoteId = useSetRecoilState(noteIdState)
  const setTitle = useSetRecoilState(titleState)
  const setBlockList = useSetRecoilState(blockListState)

  const setMemo = useSetRecoilState(memoState)
  const setThumbnail = useSetRecoilState(noteThumbnailUrlState)
  const resetThumbnailFile = useResetRecoilState(noteThumbnailFileState)

  async function modifyInfo(noteId: string|undefined) {
    if (isLogin) {
      if (isModifying) {
        const LyricInfo = await getLyricInfo(noteId)
        if (LyricInfo !== undefined) {
          setNoteId(LyricInfo.id)
          setTitle(LyricInfo.title)
          setBlockList(LyricInfo.lyricList)
          setMemo(LyricInfo.memo)
          setThumbnail(LyricInfo.thumbnail)
        } else {
          console.log('추천주제는 여기 아냐?')
          setTitle(title)
        } 
      } else {
        if (!isTemp) {
          localStorage.removeItem('note')
          setNoteId('')
          setTitle('무제')
          setBlockList([])
          setMemo('')
          setThumbnail('')
          resetThumbnailFile()
          console.log((localStorage.getItem('note')))
        } else {
          console.log('임시저장 후 로그인은 여기 아냐?')
        }
      }
    }
  }

  useEffect(() => {
      modifyInfo(params.id)
  }, [isModifying])

  return (
    <WriteBox>
      <WriteSidebar />
      <WriteNote />
    </WriteBox>
  )
}

export default Write