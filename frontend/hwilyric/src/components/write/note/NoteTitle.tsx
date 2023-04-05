import { useRef } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { noteIdState, titleState, saveTimeSelector } from "../../../atoms/noteAtoms"
import { TitleDivBox } from "../../../styles/writeNoteStyle"

function NoteTitle() {
    const titleInput = useRef<HTMLInputElement>(null)
    const [title, setWTitle] = useRecoilState(titleState)
  
    const noteId = useRecoilValue(noteIdState)
    const updateTime = useRecoilValue(saveTimeSelector)
    
    const handleChangeTitle = () => {
        if (titleInput.current) {
            setWTitle(titleInput.current.value)
        }
    }
  

  return (
      <>      
        <TitleDivBox>
          <input
            ref={titleInput}
            value={title}
            placeholder={"무제"}
            onChange={handleChangeTitle}
          />
      {(noteId) ? <p style={{fontSize: 12}}>{ updateTime }</p> : (<></>)}
      </TitleDivBox>
      </>
    )
}

export default NoteTitle