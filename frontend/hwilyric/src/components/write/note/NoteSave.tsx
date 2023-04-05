import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { blockListState, titleState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, saveTimeState } from "../../../atoms/noteAtoms"
import { useEffect } from "react"
import { IsLoginAtom } from "../../../atoms/userAtom"
import { ILyricInfoTypes } from "../../../types/writingType"
import { saveNote } from "../../../api/writingApi"
import { memoState } from "../../../atoms/sidebarAtoms"
import { useNavigate } from "react-router-dom"
import { SaveDivBox } from "../../../styles/writeNoteStyle"
import { SaveButton } from "../../../styles/common/ButtonStyle"
import { isTempAtom } from "../../../atoms/mypageAtom"

function NoteSave () {
    const navigate = useNavigate();

    const blockList = useRecoilValue(blockListState)
    const [noteId, setNoteId] = useRecoilState(noteIdState)
    const title = useRecoilValue(titleState)

    const isLogin = useRecoilValue(IsLoginAtom)
    const setIsTemp = useSetRecoilState(isTempAtom)
    const memo = useRecoilValue(memoState)
    const thumbnailFile = useRecoilValue(noteThumbnailFileState)
    const noteThumbnailUrl = useRecoilValue(noteThumbnailUrlState)
    const setThumbnailImageUrl = useSetRecoilState(noteThumbnailUrlState)

    const setSaveTime = useSetRecoilState(saveTimeState)

    useEffect(() => {
        const autoSaveNote = setInterval(() => {
            onSave()
      }, 180000)
    
      return () => {
        clearInterval(autoSaveNote)
      }
    }, [])

    const onSave = async () => {

        const noteInfo: ILyricInfoTypes = {
            id: noteId,
            title: title,
            thumbnail: noteThumbnailUrl,
            memo: memo,
            lyricList: blockList
        }
        
        const formData = new FormData()
        const noteInfoString = JSON.stringify(noteInfo)
        formData.append("noteInfo", new Blob([noteInfoString], { type: 'application/json' }));
        // if (thumbnailFile) {
        //     const blob = new Blob([thumbnailFile],  { type: thumbnailFile.type })
        //     formData.append("thumbnail", blob)
        // }
        formData.append("thumbnail", thumbnailFile)
    
        // 로그인 유무 확인
        if (isLogin) {
            const res = await saveNote(formData)
            console.log(res)
            setNoteId(() => res.id)
            setThumbnailImageUrl(res.thumbnail)
            setSaveTime(res.updatedDate)
            setIsTemp(false)
    
            // 저장 시간 받기
        } else {
            window.localStorage.setItem('note', JSON.stringify(formData))
            console.log("로컬에 저장~!")
            setIsTemp(true)
            // 로그인X -> localStorage 저장 후 로그인 물어보기
            if (window.confirm("로그인이 필요합니다. 로그인 하시겠습니까?")) {
                navigate("/login")
            }
            // 로그인 하고 돌아오면 localStorage 데이터 불러오기
        }
    }
    
    return (
        <SaveDivBox>
            <SaveButton onClick={onSave}>저장</SaveButton>
        </SaveDivBox>
    )
}

export default NoteSave