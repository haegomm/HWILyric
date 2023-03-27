import { useRecoilValue } from "recoil"
import { blockListState } from "../../../atoms/noteAtoms"
import {ICheckSimilarity} from "../../../types/sideBarType"

function CheckSimilarity() {
    
    const blockList = useRecoilValue(blockListState)

    const onCheck = () => {
        const body: ICheckSimilarity[] = []
        blockList.map((block) => body.push(block.lyrics))
    }
    
    return (
        <div>
            <button onClick={onCheck}>유사도 검사하기</button>
        </div>
    )
}

export default CheckSimilarity