import axios from "axios"
import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { PlayVideoId } from "../../../atoms/youtubeVideoAtoms";
import { SearchBox, SearchBoxStyle, SearchInput, SearchResultItem, SearchResultList, SearchIconButton, SearchResultItemText } from "../../../styles/writeSidebarStyle";
import {SearchIcon} from "../../../assets/writeSideBar/search";
import MusicBar from "../MusicBar";


function SearchVideo() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [videoId, setVideoId] = useRecoilState(PlayVideoId);
    
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
  
  const handleGetVideoId = (clickVideoId: string) => {
    setVideoId(() => clickVideoId);
    }


  
    return (
      <SearchBox className="SearchBox">
        <SearchBoxStyle className="SearchBoxStyle">
          <SearchInput className="SearchInput" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="노래를 검색해보세요" onKeyDown={(e) => {if (e.key === 'Enter') {handleSearch()}}}/>
          <SearchIconButton className="SearchIconButton" onClick={handleSearch}>
            <img style={{ width: "3vh", height: "3vh" }} src={SearchIcon} />
          </SearchIconButton>
        </SearchBoxStyle>
        {results ? (
          <SearchResultList className="SearchResultList">
            {results.map((result) => (
              <SearchResultItem className="SearchResultItem" key={result.id.videoId}>
                <img src={result.thumbnail} alt="thumbnail" />
                <SearchResultItemText onClick={(e) => { handleGetVideoId(result.id.videoId) }} style={{ fontSize: "12px" }}>{result.title}</SearchResultItemText>
                {(videoId === result.id.videoId) ? <MusicBar></MusicBar> : <></>}
              </SearchResultItem>
            ))}
          </SearchResultList>) : <></>}
      </SearchBox>
    );
}
  
export default SearchVideo