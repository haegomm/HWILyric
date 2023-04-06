import Memo from "./sidebar/Memo"
import SearchVideo from "./sidebar/SearchVideo"
import Thumbnail from "./sidebar/Thumbnail"

function SidebarReferenceTab() {
    return (
        <div style={{margin: '0px', display: 'block', justifyContent: 'center', alignItems: 'center'}}>
            <Thumbnail />
            <Memo />
            <SearchVideo />
        </div>
    )
}

export default SidebarReferenceTab