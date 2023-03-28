import axios from "axios"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { PlayVideoId } from "../../../atoms/youtubeVideoAtoms";


function SearchVideo() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const setVideoId = useSetRecoilState(PlayVideoId)
    
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: query,
              type: "video",
              maxResults: 1,
              key: process.env.REACT_APP_YOUTUBE_API_KEY,
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
    setVideoId(params)
    console.log(params)
    }  
  
    return (
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {results.map((result) => (
          <div key={result.id.videoId}>
            <div>
              <h3 onClick={(e)=>{handleGetVideoId(result.id.videoId)}}>{result.snippet.title}</h3>
              <img src={result.snippet.thumbnails.default.url} alt="thumnail" />
            </div>
          </div>
        ))}
      </div>
    );
}
  
export default SearchVideo
