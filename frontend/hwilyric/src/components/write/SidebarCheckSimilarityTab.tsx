import { useRecoilValue } from "recoil"
import { similarListLengthState } from "../../atoms/sidebarAtoms"
import CheckSimilarity from "./sidebar/CheckSimilarity"
import SimilarItem from "./sidebar/SimilarItem"
import SimilarityResult from "./sidebar/SimilarityResult"


function SidebarCheckSimilarityTab() {

    const similarListLength = useRecoilValue(similarListLengthState)

    return (
        <div>
            <CheckSimilarity />
            <SimilarItem />
            {(similarListLength > 0) ? (<SimilarityResult />) : (<></>) }
        </div>
    )
}

export default SidebarCheckSimilarityTab