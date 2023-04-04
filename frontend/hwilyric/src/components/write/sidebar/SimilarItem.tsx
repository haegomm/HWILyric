import { useState } from "react"
import { ISimilarInfoTypes } from "../../../types/writingType"
import { ArrowImage } from "../../../styles/mypageStyle";
import { downArrow, upArrow } from "../../../assets/icon/arrow";
import { SimilarLyricInfo, SimilarLyricSubInfo, SimilarUserLyric } from "../../../styles/writeSidebarStyle";

interface SimilarItemProps {
    similar?: ISimilarInfoTypes
}

function SimilarItem({ similar }: SimilarItemProps):JSX.Element {

    const [isOpen, setIsOpen] = useState(false)
    
    const onDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen)
    }

    if (!similar) {
        return (<></>)
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