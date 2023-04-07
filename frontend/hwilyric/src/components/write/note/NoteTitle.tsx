import { useRef } from "react"
import { useSetRecoilState, useRecoilValue } from "recoil"
import { noteIdState, titleState, saveTimeSelector } from "../../../atoms/noteAtoms"
import { TitleDivBox } from "../../../styles/writeNoteStyle"

function NoteTitle() {
    const titleInput = useRef<HTMLInputElement>(null)
    const setWTitle = useSetRecoilState(titleState)
  
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
            placeholder={"무제"}
            onChange={handleChangeTitle}
          />
      {(noteId) ? <p style={{fontSize: 12}}>최근 저장일: { updateTime }</p> : (<></>)}
      </TitleDivBox>
      </>
    )
}

export default NoteTitle