import { useSetRecoilState, useRecoilState } from "recoil";
import { noteThumbnailFileState, noteThumbnailUrlState } from "../../../atoms/noteAtoms";


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
        <div>
        <input type={"file"} onChange={onThumbnailImgHandler}/>
        <img src={thumbnailImageUrl} alt="profileImg"/>
        </div>
    )
}

export default Thumbnail