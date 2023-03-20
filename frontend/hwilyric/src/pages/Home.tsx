import VideoPlayer from "../components/write/features/VideoPlayer"
import VideoSearch from "../components/write/features/VideoSearch"

function Home() {
    return (
        <div>
            <h1>HWILyric</h1>
            <VideoSearch />
            <VideoPlayer />
        </div>
    )
}

export default Home