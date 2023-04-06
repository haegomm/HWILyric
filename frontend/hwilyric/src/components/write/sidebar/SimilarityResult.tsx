import { useRecoilValue } from "recoil"
import { checkLoadingState, similarListLengthState } from "../../../atoms/sidebarAtoms"
import { SimilarInform } from "../../../styles/writeSidebarStyle";
import { LightLodaing } from "../../../assets/writeSideBar/writeImg"

function SimilarityResult() {

    const similarListLength = useRecoilValue(similarListLengthState)
    const checkLoading = useRecoilValue(checkLoadingState)

    return (
        <SimilarInform>
            {/* {(!checkLoading) ? (
            (similarListLength !== 0) ? (
                <div>
                    <p>유사한 가사가 {similarListLength}개 있습니다.</p>
                    <p>표절에 주의하세요!</p>
                </div>
                ) : (
                    <div>
                        <p>유사한 가사가 없습니다.</p>
                        <p>특수문자가 있다면 제거하고 다시 시도해보세요!</p>
                    </div>
                    )
            ) : (<img src={LightLodaing} style={{ margin: '0px', width: '5vw' }} alt="no result" />)} */}
            { !checkLoading && (similarListLength !== 0) ? (
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
        </SimilarInform>
        );
    }
            
export default SimilarityResult