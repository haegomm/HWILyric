import BlockCreate from "../../components/write/note/NoteCreateBlock"
import BlockList from "../../components/write/note/NoteBlockList"
import NoteTitle from "../../components/write/note/NoteTitle"
import { NoteBox } from "../../styles/lyricNoteStyle"

function WriteNote() {
    return (
        <NoteBox>
            <div className="titleBox">
                <NoteTitle />
            </div>
            <div className="BlocksBox">
                <BlockList />
                <BlockCreate />
            </div>
        </NoteBox>
    )
}

export default WriteNote