import { useEffect } from "react"
import axios from "axios"
import { useRecoilState } from "recoil";
import { PlayVideoId } from "../../../atoms/YoutubeVideoAtoms";

interface Player {
    apiKey?: string
  }

function VideoAudioPlayer() {
    const [ videoId, setVideoId ] = useRecoilState(PlayVideoId)

    useEffect(() => {
        if (videoId !== "") {
            const playVideoAudio = async() => {
                const apiKey = process.env.REACT_APP_YOUTUBE_CLIENT_KEY
                const response = await getVideoAudio(videoId, apiKey!)
                console.log('Audio Streams:', response.data.items[0].contentDetails.audioStreams)
                console.log('Audio:', response.data.items[0].contentDetails.audio)
            }

            playVideoAudio()
        }
      }, [videoId])
    

    const getVideoAudio = async(videoId: string, apiKey: string) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${apiKey}`
        const response = await axios.get(apiUrl)
        return response
    }

    return (
        <div></div>
    )
}

export default VideoAudioPlayer