import { useState } from "react"
import { ISimilarInfoTypes } from "../../../types/writingType"
import { ArrowImage, DropboxDiv } from "../../../styles/mypageStyle";
import { downArrow, upArrow } from "../../../assets/mypage/arrow";

interface SimilarItemProps {
    similar: ISimilarInfoTypes
}

function SimilarItem({ similar }: SimilarItemProps) {

    const [isOpen, setIsOpen] = useState(false)
    
    const onDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <DropboxDiv>
                <div
                className={`select-box ${isOpen ? 'open' : ''}`}
                onClick={onDropHandler}>
                    {similar.userLyric}
                    {isOpen ? 
                    <ArrowImage src={upArrow} />
                    : <ArrowImage src={downArrow} />
                    }
                </div>
                { isOpen && (
                    <div className="similarLyric-drop">
                    {similar.lyricList.map((similarLyric, index) => (
                        <div
                        className="similarLyric-item"
                        key="index">
                            {similarLyric}
                            {similar.titleList[index]}
                            {similar.artistList[index]}
                        </div>
                    ))}
                    </div>
                )}
        </DropboxDiv>
    </div>
    )
}

export default SimilarItem