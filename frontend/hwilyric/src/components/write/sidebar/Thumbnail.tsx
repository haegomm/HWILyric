import { useRef } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { noteThumbnailFileState, noteThumbnailUrlState } from "../../../atoms/noteAtoms";
import {ThumbnailBox, ThumbnailInput, ThumbnailImage, ThumbnailLabel, ThumbnailUploadDiv} from "../../../styles/writeSidebarStyle"

function Thumbnail() {
    
    const setThumbnailFile = useSetRecoilState(noteThumbnailFileState)
    const [ thumbnailImageUrl, setThumbnailImageUrl ] = useRecoilState(noteThumbnailUrlState)

    const inputRef = useRef<HTMLInputElement | null>(null);

    const onThumbnailImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) return;

        if (e.target.files[0]) {
            console.log(e.target.files[0])
            setThumbnailFile(e.target.files[0]);
            const url = URL.createObjectURL(e.target.files[0])
            console.log(url)
            setThumbnailImageUrl(url)
        }
    }

    return (
        <ThumbnailBox className="ThumbnailBox">
            <ThumbnailImage className="ThumbnailImage" src={thumbnailImageUrl} alt="thumbnail"/>
            <ThumbnailUploadDiv>
                <ThumbnailLabel className="ThumbnailLabel" htmlFor="thumbnail">업로드</ThumbnailLabel>
                <ThumbnailInput className="ThumbnailInput" id="thumbnail" ref={inputRef} type={"file"} onChange={onThumbnailImgHandler}/>
            </ThumbnailUploadDiv>
        </ThumbnailBox>
    )
}

export default Thumbnail