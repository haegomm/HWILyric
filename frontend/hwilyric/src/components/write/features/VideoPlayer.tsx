import React, { useState, useRef } from "react";
import YouTube from "react-youtube";

type PlayerState = "playing" | "paused" | "stopped" | "unstarted";

function VideoPlayer() {
  const [playerState, setPlayerState] = useState<PlayerState>("unstarted");
  const [videoId, setVideoId] = useState("");
  const playerRef = useRef<YT.Player | null>(null);

  const handlePlayerReady = (event: YT.PlayerEvent) => {
    console.log("Player is ready");
    playerRef.current = event.target;
  };

  const handlePlayerStateChange = (event: YT.OnStateChangeEvent) => {
    console.log("Player state has changed", event.data);
    setPlayerState(getPlayerState(event.data));
  };

  const getPlayerState = (state: number): PlayerState => {
    switch (state) {
      case YT.PlayerState.PLAYING:
        return "playing";
      case YT.PlayerState.PAUSED:
        return "paused";
      case YT.PlayerState.ENDED:
      case YT.PlayerState.CUED:
        return "stopped";
      default:
        return "unstarted";
    }
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  const handleStop = () => {
    if (playerRef.current) {
      playerRef.current.stopVideo();
      setPlayerState("stopped");
    }
  };

  const handleSearch = () => {
    // Perform YouTube API search to get video ID
    // ...

    // Set the video ID for the player
    setVideoId("VIDEO_ID");
  };

  
  return (
      
      <div>
        {/* <script src="https://www.youtube.com/iframe_api"></script> */}
        <button onClick={handlePlay} disabled={playerState !== "paused"}>
            Play
        </button>
        <button onClick={handlePause} disabled={playerState !== "playing"}>
            Pause
        </button>
        <button onClick={handleStop} disabled={playerState === "stopped"}>
            Stop
        </button>
        <div>
            <YouTube
            videoId={videoId}
            onReady={handlePlayerReady}
            onStateChange={handlePlayerStateChange}
            />
        </div>
    </div>
  );
}


export default VideoPlayer