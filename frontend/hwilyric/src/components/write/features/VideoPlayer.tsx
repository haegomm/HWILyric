import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import YouTube from "react-youtube";
import { PlayVideoId } from "../../../atoms/YoutubeVideoAtoms";

type PlayerState = "playing" | "paused" | "stopped" | "unstarted";

function VideoPlayer() {
  const [playerState, setPlayerState] = useState<PlayerState>("unstarted");
  const playerRef = useRef<YT.Player | null>(null);
  const [videoId, setVideoId] = useRecoilState(PlayVideoId)

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

  
  return (
      
      <div>
        {/* <script src="https://www.youtube.com/iframe_api"></script> */}
        <button onClick={handlePlay} disabled={playerState !== "paused"}>
            ▶
        </button>
        <button onClick={handlePause} disabled={playerState !== "playing"}>
            ⏸
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