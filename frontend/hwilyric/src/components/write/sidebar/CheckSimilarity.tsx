import { useRecoilValue } from "recoil"
import { blockListState } from "../../../atoms/noteAtoms"
import { ISimilarityTypes } from "../../../types/writingType"
import { checkSimilarity } from "../../../api/writingApi"
import { CheckButton } from "../../../styles/common/ButtonStyle"

function CheckSimilarity() {
    
    const blockList = useRecoilValue(blockListState)

    const getUserLyrics = () => {
        const lyrics = blockList.filter(block => block.lyrics !== null).map((block => block.lyrics!))
        return lyrics
    }

    const onCheck = async () => {
        const lyrics = await getUserLyrics()
        console.log(lyrics)
        const body: ISimilarityTypes = {
            userLyric: lyrics
        }
        console.log("유사도 검사해줘~!", body)
        
        const data = await checkSimilarity(body)
        return data
    }
    
    return (
        <div>
            <CheckButton onClick={onCheck}>유사도 검사하기</CheckButton>
        </div>
    )
}

export default CheckSimilarity