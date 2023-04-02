import axios from "axios"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { PlayVideoId } from "../../../atoms/youtubeVideoAtoms";
import { SearchBoxStyle, SearchInput, SearchResultItem, SearchResultList } from "../../../styles/writeSidebarStyle";
import { SearchButton } from "../../../styles/common/ButtonStyle";


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
              maxResults: 10,
              key: process.env.REACT_APP_YOUTUBE_API_KEY,
            },
          }
        )
        
        const items = response.data.items.map((item: any) => {
          const { id, snippet } = item
          // const title = snippet.title.replace(/[^\w\s]/gi, "");
          const title = snippet.title.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g, " ")
          const thumbnail = snippet.thumbnails.default.url
          return { id, title, thumbnail }
        });

          setResults(() => items)
          console.log(response)
        console.log(items)
      } catch (error) {
        console.error(error)
      }
    };
  
  const handleGetVideoId = (videoId: string) => {
    setVideoId(videoId)
    console.log(videoId)
    }
  
    return (
      <div>
        <SearchBoxStyle>
          <SearchInput type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchBoxStyle>
        <SearchResultList>
          {results.map((result) => (
            <div key={result.id.videoId}>
              <SearchResultItem>
                <img src={result.thumbnail} alt="thumnail" />
                <p onClick={(e)=>{handleGetVideoId(result.id.videoId)}}>{result.title}</p>
              </SearchResultItem>
            </div>
          ))}
        </SearchResultList>
      </div>
    );
}
  
export default SearchVideo