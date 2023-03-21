import axios from "axios"
import { useState,useRef } from "react"
import { useRecoilState } from "recoil"
import { PlayVideoId } from "../../../atoms/YoutubeVideoAtoms";


function VideoSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [videoId, setVideoId] = useRecoilState(PlayVideoId)
    
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: query,
              type: "video",
              maxResults: 10,
              key: process.env.REACT_APP_YOUTUBE_API_KEY, // Replace with your YouTube API key
            },
          }
        );
        setResults(response.data.items);
        console.log(response)
        console.log(results)
      } catch (error) {
        console.error(error);
      }
    };
  
  const handleGetVideoId = (params: string) => {
      videoId.current = params
    }  
  
    return (
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {results.map((result) => (
          <div key={result.id.videoId}>
            <div>
              <h3 onClick={(e)=>{handleGetVideoId(result.id.videoId)}}>{result.snippet.title}</h3>
              <img src={result.snippet.thumnails.default.url} alt="thumnail" />
            </div>
            {/* <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${result.id.videoId}`}
              title={result.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe> */}
          </div>
        ))}
        {/* <div>
          { (videoId) ? <VideoPlayer videoId={videoId} /> : <div></div>}
        </div> */}
      </div>
    );
}
  
export default VideoSearch