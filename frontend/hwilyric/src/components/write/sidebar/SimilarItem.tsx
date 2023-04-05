import { useState } from "react"
import { ISimilarInfoTypes } from "../../../types/writingType"
import { ArrowImage } from "../../../styles/mypageStyle";
import { downArrow, upArrow } from "../../../assets/icon/arrow";
import { SimilarLyricInfo, SimilarLyricSubInfo, SimilarUserLyric } from "../../../styles/writeSidebarStyle";
import { LightLodaing } from "../../../assets/writeSideBar/writeImg"
import { checkLoadingState } from "../../../atoms/sidebarAtoms";
import { useRecoilValue } from "recoil";

interface SimilarItemProps {
    similar?: ISimilarInfoTypes
}

function SimilarItem({ similar }: SimilarItemProps): JSX.Element {    

    const [isOpen, setIsOpen] = useState(false)
    const checkLoading = useRecoilValue(checkLoadingState)
    
    const onDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen)
    }

    if (!similar) {
        if (checkLoading) {
            return (<img src={LightLodaing} style={{ margin: '0px', width: '5vw' }} alt="no result" />)
        }
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <SimilarUserLyric
                    className={`select-box ${isOpen ? 'open' : ''}`}
                    onClick={onDropHandler}>
                        {similar.userLyric}&nbsp;
                        {isOpen ? 
                        <ArrowImage src={upArrow} />
                        : <ArrowImage src={downArrow} />
                    }
                    </SimilarUserLyric>
                    { isOpen ? (
                        <div className="similarLyric-drop">
                        {similar.lyricList.map((similarLyric, index) => (
                            <SimilarLyricInfo
                            className="similarLyric-item"
                            key="index">
                                {similarLyric}
                                <SimilarLyricSubInfo>
                                    <p>{similar.titleList[index]}</p>
                                    <p>&nbsp;_&nbsp;{similar.artistList[index]}</p>
                                </SimilarLyricSubInfo>
                            </SimilarLyricInfo>
                        ))}
                        </div>
                    ) : (<p>가사를 작성하고 버튼을 눌려보세요:)</p>)}
                </>
            )
        }
    }

export default SimilarItem