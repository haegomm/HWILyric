import Memo from "./sidebar/Memo"
import SearchVideo from "./sidebar/SearchVideo"
import Thumbnail from "./sidebar/Thumbnail"

function SidebarReferenceTab() {
    return (
        <div>
            <Thumbnail />
            <Memo />
            <SearchVideo />
        </div>
    )
}

export default SidebarReferenceTab