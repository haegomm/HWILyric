import React, { useState } from "react"
import axios from "axios"

function VideoSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    
  
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
  
    return (
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {results.map((result) => (
          <div key={result.id.videoId}>
            <h3>{result.snippet.title}</h3>
            <img src={result.snippet.thumnails.default.url} alt="thumnail" />
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${result.id.videoId}`}
              title={result.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    );
}
  
export default VideoSearch