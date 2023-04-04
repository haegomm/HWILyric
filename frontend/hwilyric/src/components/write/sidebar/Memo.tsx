import { useRecoilState } from "recoil"
import { memoState } from "../../../atoms/sidebarAtoms"
import { MemoBox } from "../../../styles/writeSidebarStyle"

function Memo() {
    
    const [ memo, setMemo ] = useRecoilState(memoState) 

    const onEditMemo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMemo: string = event.target.value
        setMemo(newMemo)
    }

    return (
        <div>
            <MemoBox
                className="writeLyric"
                value={memo}
                onChange={onEditMemo}
                placeholder="현재 생각을 메모해보세요"
            />
        </div>
    )
}

export default Memo