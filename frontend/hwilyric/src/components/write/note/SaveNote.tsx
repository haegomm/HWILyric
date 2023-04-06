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

function SaveNote() {
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
        formData.append("thumbnail", thumbnailFile)
    
        if (isLogin) {
            const res = await saveNote(formData)
            console.log(res)
            setNoteId(() => res.id)
            setThumbnailImageUrl(res.thumbnail)
            setSaveTime(res.updatedDate)
            setIsTemp(false)
    
        } else {
            window.localStorage.setItem('note', JSON.stringify(formData))
            console.log("로컬 저장!")
            setIsTemp(true)
        }
    }

    const onNavigateToLogin = () => {
        if (!isLogin) {
            if (window.confirm("로그인이 필요합니다. 로그인 하시겠습니까?")) {
                navigate("/login")
            }
        }
    }
    
    return (
        <SaveDivBox>
            <SaveButton onClick={() => { onSave(); onNavigateToLogin(); }}>저장</SaveButton>
        </SaveDivBox>
    )
}
    
export default SaveNote