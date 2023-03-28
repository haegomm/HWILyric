import { useRecoilState } from "recoil"
import { memoState } from "../../../atoms/sidebarAtoms"

function Memo() {
    
    const [ memo, setMemo ] = useRecoilState(memoState) 

    const onEditMemo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMemo: string = event.target.value
        setMemo(newMemo)
    }

    return (
        <div>
            <textarea
                className="writeLyric"
                value={memo}
                onChange={onEditMemo}
            />
        </div>
    )
}

export default Memo