import { useRecoilValue } from "recoil"
import { similarListLengthState } from "../../../atoms/sidebarAtoms"

function SimilarityResult() {

    const similarListLength = useRecoilValue(similarListLengthState)    

    return (
        <div>
            {similarListLength > 0 ? (
            <div>
                <p>유사한 가사가 {similarListLength}개 있습니다.</p>
                <p>표절에 주의하세요!</p>
            </div>
            ) : (
            <div>
                <p>유사한 가사가 없습니다.</p>
                <p>특수문자가 있다면 제거하고 다시 시도해보세요!</p>
            </div>
            )}
        </div>
        );
    }
            
export default SimilarityResult