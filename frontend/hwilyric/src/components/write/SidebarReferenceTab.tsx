import Memo from "./sidebar/Memo"
import SearchVideo from "./sidebar/SearchVideo"
import Thumbnail from "./sidebar/Thumbnail"
import VideoPlayer from "./sidebar/VideoPlayer"

function SidebarReferenceTab() {
    return (
        <div>
            <Thumbnail />
            <Memo />
            <SearchVideo />
            <VideoPlayer />
        </div>
    )
}

export default SidebarReferenceTab