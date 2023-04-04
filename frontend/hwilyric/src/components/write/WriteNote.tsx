import BlockCreate from "../../components/write/note/NoteCreateBlock"
import BlockList from "../../components/write/note/NoteBlockList"
import NoteTitle from "../../components/write/note/NoteTitle"
import { IsLoginAtom }  from "../../atoms/userAtom"
import { NoteBox } from "../../styles/writeNoteStyle"
import { WriteDivBox } from "../../styles/common/DivBox"
import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { blockListState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, titleState } from "../../atoms/noteAtoms"
import { memoState } from "../../atoms/sidebarAtoms"

function WriteNote() {
    return (
        <WriteDivBox>            
            <NoteBox>
                <NoteTitle />
                <BlockList />
                <BlockCreate />
            </NoteBox>
        </WriteDivBox>
    )
}

export default WriteNote