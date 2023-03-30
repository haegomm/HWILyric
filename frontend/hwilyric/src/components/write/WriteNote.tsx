import BlockCreate from "../../components/write/note/NoteCreateBlock"
import BlockList from "../../components/write/note/NoteBlockList"
import NoteTitle from "../../components/write/note/NoteTitle"
import { NoteBox } from "../../styles/writeNoteStyle"
import { WriteDivBox } from "../../styles/common/DivBox"

function WriteNote() {
    return (
        <WriteDivBox>            
            <NoteBox>
                <div className="titleBox">
                    <NoteTitle />
                </div>
                <div className="BlocksBox">
                    <BlockList />
                    <BlockCreate />
                </div>
            </NoteBox>
        </WriteDivBox>
    )
}

export default WriteNote