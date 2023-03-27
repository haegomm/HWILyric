import { useRecoilValue } from "recoil"
import { blockListState } from "../../../atoms/noteAtoms"
import { ICheckSimilarity } from "../../../types/sideBarType"
import { checkSimilarity } from "../../../api/writeApi"

function CheckSimilarity() {
    
    const blockList = useRecoilValue(blockListState)

    const getUserLyrics = () => {
        const getLyrics: string[] = []
        blockList.map((block) => getLyrics.push(block.lyrics))
        return getLyrics
    }

    const onCheck = async () => {
        const lyrics = await getUserLyrics()

        const body: ICheckSimilarity = {
            userLyricList: lyrics
        }
        
        const data = await checkSimilarity(body)
        return data
    }
    
    return (
        <div>
            <button onClick={onCheck}>유사도 검사하기</button>
        </div>
    )
}

export default CheckSimilarity