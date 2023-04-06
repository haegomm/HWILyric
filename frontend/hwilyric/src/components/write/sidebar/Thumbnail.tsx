import { useRef } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { noteThumbnailFileState, noteThumbnailUrlState } from "../../../atoms/noteAtoms";
import {ThumbnailBox, ThumbnailInput, ThumbnailImage, ThumbnailLabel, ThumbnailUploadDiv} from "../../../styles/writeSidebarStyle"
import { ProfileImageDiv, ProfileImageImg } from "../../../styles/common/ProfileImageStyle";

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
            <ProfileImageDiv width="100px" height="100px" borderRadius="0" style={{position
            :'relative'}}>
                <ProfileImageImg className="ThumbnailImage" src={thumbnailImageUrl} alt="thumbnail" />
            </ProfileImageDiv>
            <ThumbnailUploadDiv>
                <ThumbnailLabel className="ThumbnailLabel" htmlFor="thumbnail">업로드</ThumbnailLabel>
                <ThumbnailInput className="ThumbnailInput" id="thumbnail" ref={inputRef} type={"file"} onChange={onThumbnailImgHandler} accept="image/gif, image/jpeg, image/png"/>
            </ThumbnailUploadDiv>
        </ThumbnailBox>
    )
}

export default Thumbnail