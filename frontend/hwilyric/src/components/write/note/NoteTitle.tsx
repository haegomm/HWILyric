import { useRef } from "react"
import { useRecoilState } from "recoil"
import { titleState } from "../../../atoms/noteAtoms"
import { TitleDivBox } from "../../../styles/writeNoteStyle"

function NoteTitle() {
    const titleInput = useRef<HTMLInputElement>(null)
    const [title, setWTitle] = useRecoilState(titleState)
    
    const handleChangeTitle = () => {
        if (titleInput.current) {
            setWTitle(titleInput.current.value)
            console.log("제목이 뭐야?", title )
        }
    }

    return (
        <TitleDivBox>
          <input
            ref={titleInput}
            value={title}
            placeholder={"무제"}
            onChange={handleChangeTitle}
          />
        </TitleDivBox>
    )
}

export default NoteTitle