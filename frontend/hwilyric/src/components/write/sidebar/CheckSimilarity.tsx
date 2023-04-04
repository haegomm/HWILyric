import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"
import SimilarItem from "./SimilarItem"
import { blockListState } from "../../../atoms/noteAtoms"
import { similarListState, similarListLengthState, checkLoadingState } from "../../../atoms/sidebarAtoms"
import { ISimilarityTypes } from "../../../types/writingType"
import { checkSimilarity } from "../../../api/writingApi"
import { CheckButton } from "../../../styles/common/ButtonStyle"
import { SimilarListBox } from "../../../styles/writeSidebarStyle"

function CheckSimilarity() {
    
    const blockList = useRecoilValue(blockListState)
    const [similarList, setSimilarList] = useRecoilState(similarListState)
    const setSimilarListLength = useSetRecoilState(similarListLengthState)
    const setCheckLoadingState = useSetRecoilState(checkLoadingState)

    const getUserLyrics = () => {
        const lyrics = blockList.filter(block => block.lyrics !== null).map((block => block.lyrics!))
        return lyrics
    }

    const onCheck = async () => {
        setCheckLoadingState(true)
        const lyrics = await getUserLyrics()
        console.log(lyrics)
        const body: ISimilarityTypes = {
            userLyric: lyrics
        }
        console.log("유사도 검사해줘~!", body)
        
        const data = await checkSimilarity(body)
        setSimilarList(data.similarList)
        setSimilarListLength(data.similarList.length)
        await setCheckLoadingState(false)
        return data
    }
    
    return (
        <>
            <CheckButton onClick={onCheck}>유사도 검사하기</CheckButton>
            {(similarList) ? (
                <SimilarListBox>
                    {similarList.map((similar, index) => (                             
                        <SimilarItem key={index} similar = {similar} />
                    ))}
                </SimilarListBox>
            ) : (<></>)
            }
        </>
    )
}

export default CheckSimilarity