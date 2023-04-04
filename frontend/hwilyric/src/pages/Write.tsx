import React, { useEffect } from 'react'
import { WriteBox } from "../styles/writeStyle"
import WriteNote from "../components/write/WriteNote"
import WriteSidebar from "../components/write/WriteSidebar"
import { useParams } from "react-router-dom"
import { getLyricInfo } from '../api/writingApi'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { blockListState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, titleState } from '../atoms/noteAtoms'
import { memoState } from '../atoms/sidebarAtoms'
import { IsLoginAtom } from '../atoms/userAtom'
import { isModifyingAtom } from '../atoms/mypageAtom'

function Write() {
  const params = useParams();

  const isLogin = useRecoilValue(IsLoginAtom)
  const isModifying = useRecoilValue(isModifyingAtom)

  const setNoteId = useSetRecoilState(noteIdState)
  const setTitle = useSetRecoilState(titleState)
  const setBlockList = useSetRecoilState(blockListState)

  const setMemo = useSetRecoilState(memoState)
  const setThumbnail = useSetRecoilState(noteThumbnailUrlState)
  const resetThumbnailFile = useResetRecoilState(noteThumbnailFileState)

  async function modifyInfo(noteId: string|undefined) {
    if (isLogin) {
      const LyricInfo = await getLyricInfo(noteId)
      if (LyricInfo !== null) {
        if (LyricInfo !== undefined) {
          setNoteId(LyricInfo.id)
          setTitle(LyricInfo.title)
          setBlockList(LyricInfo.lyricList)
          setMemo(LyricInfo.memo)
          setThumbnail(LyricInfo.thumbnail)
        } else {
          localStorage.removeItem('note')
          setNoteId('')
          setTitle('무제')
          setBlockList([])
          setMemo('')
          setThumbnail('')
          resetThumbnailFile()
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