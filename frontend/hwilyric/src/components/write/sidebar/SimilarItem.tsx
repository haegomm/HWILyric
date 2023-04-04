import { useState } from "react"
import { ISimilarInfoTypes } from "../../../types/writingType"
import { ArrowImage } from "../../../styles/mypageStyle";
import { downArrow, upArrow } from "../../../assets/mypage/arrow";
import { SimilarLyricInfo, SimilarLyricSubInfo, SimilarUserLyric } from "../../../styles/writeSidebarStyle";
import { LightLodaing } from "../../../assets/writeSideBar/search"
import { checkLoadingState } from "../../../atoms/sidebarAtoms";
import { useRecoilValue } from "recoil";

interface SimilarItemProps {
    similar?: ISimilarInfoTypes
}

function SimilarItem({ similar }: SimilarItemProps):JSX.Element {

    const [isOpen, setIsOpen] = useState(false)
    const checkLoading = useRecoilValue(checkLoadingState)
    
    const onDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen)
    }

    if (!similar) {
        if (checkLoading) {
            return (<img src={LightLodaing} style={{ width: '5vw' }} alt="no result" />)
        }
        return (
            <div></div>
        )
    } else {
        return (
            <div>
                    <SimilarUserLyric
                    className={`select-box ${isOpen ? 'open' : ''}`}
                    onClick={onDropHandler}>
                        {similar.userLyric}&nbsp;
                        {isOpen ? 
                        <ArrowImage src={upArrow} />
                        : <ArrowImage src={downArrow} />
                        }
                    </SimilarUserLyric>
                    { isOpen && (
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
                    )}
        </div>
        )
    }
}

export default SimilarItem