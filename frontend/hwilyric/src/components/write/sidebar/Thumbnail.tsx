import { useSetRecoilState, useRecoilState } from "recoil";
import { noteThumbnailFileState, noteThumbnailUrlState } from "../../../atoms/noteAtoms";
import {ThumbnailBox, ThumbnailInput, ThumbnailImage, ThumbnailLabel, ThumbnailUploadDiv} from "../../../styles/writeSidebarStyle"

function Thumbnail() {
    
    const setThumbnailFile = useSetRecoilState(noteThumbnailFileState)
    const [ thumbnailImageUrl, setThumbnailImageUrl ] = useRecoilState(noteThumbnailUrlState)

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
        <ThumbnailBox>
            <ThumbnailImage src={thumbnailImageUrl} alt="thumbnail"/>
            <ThumbnailUploadDiv>
                <ThumbnailLabel htmlFor="thumbnail">업로드</ThumbnailLabel>
                <ThumbnailInput id="thumbnail" type={"file"} onChange={onThumbnailImgHandler}/>
            </ThumbnailUploadDiv>
        </ThumbnailBox>
    )
}

export default Thumbnail