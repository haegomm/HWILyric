import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { blockListState, titleState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState } from "../../../atoms/noteAtoms"
import { IsLoginAtom }  from "../../../atoms/userAtom"
import { ILyricInfoTypes } from "../../../types/writingType"
import { saveNote } from "../../../api/writingApi"
import { memoState } from "../../../atoms/sidebarAtoms"
import { useNavigate } from "react-router-dom"

async function NoteSave () {
    const navigate = useNavigate();

    const blockList = useRecoilValue(blockListState)
    const [noteId, setNoteId] = useRecoilState(noteIdState)
    const title = useRecoilValue(titleState)

    const isLogin = useRecoilValue(IsLoginAtom)
    const memo = useRecoilValue(memoState)
    const thumbnailFile = useRecoilValue(noteThumbnailFileState)
    const noteThumbnailUrl = useRecoilValue(noteThumbnailUrlState)
    const setThumbnailImageUrl = useSetRecoilState(noteThumbnailUrlState)
    
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
        setNoteId(() => res)
        setThumbnailImageUrl(res.thumbnail)

        // 저장 시간 받기
    } else {
        window.localStorage.setItem('note', JSON.stringify(formData))
        console.log("로컬에 저장~!")
        // 로그인X -> localStorage 저장 후 로그인 물어보기
        if (window.confirm("로그인이 필요합니다. 로그인 하시겠습니까?")) {
            navigate("/login")
        }
        // 로그인 하고 돌아오면 localStorage 데이터 불러오기
    }
}

export default NoteSave