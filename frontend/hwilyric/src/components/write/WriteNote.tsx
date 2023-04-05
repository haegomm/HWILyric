import BlockCreate from "../../components/write/note/NoteCreateBlock"
import BlockList from "../../components/write/note/NoteBlockList"
import NoteTitle from "../../components/write/note/NoteTitle"
import { IsLoginAtom }  from "../../atoms/userAtom"
import { WriteNoteDivBox } from "../../styles/common/DivBox"
import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { blockListState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, titleState } from "../../atoms/noteAtoms"
import { memoState } from "../../atoms/sidebarAtoms"
import VideoPlayer from "./sidebar/VideoPlayer"
import NoteSave from "./note/NoteSave"
import { isTempAtom } from "../../atoms/mypageAtom"

function WriteNote() {

    const isLogin = useRecoilValue(IsLoginAtom)
    const isTemp = useRecoilValue(isTempAtom)

    const blockListReset = useResetRecoilState(blockListState)
    const noteIdReset = useResetRecoilState(noteIdState)
    const titleReset = useResetRecoilState(titleState)

    const memoReset = useResetRecoilState(memoState)
    const thumbnailFileReset = useResetRecoilState(noteThumbnailFileState)
    const noteThumbnailUrlReset = useResetRecoilState(noteThumbnailUrlState)

    useEffect(() => {
        if (isLogin && !isTemp) {
            localStorage.removeItem('note')
            blockListReset()
            noteIdReset()
            titleReset()
            memoReset()
            thumbnailFileReset()
            noteThumbnailUrlReset()
        }
    }, [])
    

    return (
        <WriteNoteDivBox>           
            <NoteTitle />
            <BlockList />
            <NoteSave />
            <BlockCreate />
            <VideoPlayer />
        </WriteNoteDivBox>
    )
}

export default WriteNote