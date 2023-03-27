import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import YouTube from "react-youtube";
import ProgressBar from "react-bootstrap/ProgressBar";

import { PlayVideoId } from "../../../atoms/youtubeVideoAtoms";
import { PlayerBox, PlayerVideoBox, PlayButton } from "../../../styles/VideoPlayerStyles";

type PlayerState = "playing" | "paused" | "stopped" | "unstarted";

function VideoPlayer() {
  const [playerState, setPlayerState] = useState<PlayerState>("unstarted")
  const playerRef = useRef<YT.Player | null>(null)
  const videoId = useRecoilValue(PlayVideoId)

  const [isPlay, setIsPlay] = useState(false)
  const toggleIsPlay = () => setIsPlay(!isPlay)

  const [currentTime, setCurrentTime] = useState(0);


  const handlePlayerReady = (event: YT.PlayerEvent) => {
    console.log("Player is ready")
    playerRef.current = event.target
  }

  const handlePlayerStateChange = (event: YT.OnStateChangeEvent) => {
    console.log("Player state has changed", event.data)
    onStateChange(event)
    setPlayerState(getPlayerState(event.data))
  }

  const getPlayerState = (state: number): PlayerState => {
    switch (state) {
      case YT.PlayerState.PLAYING:
        return "playing";
      case YT.PlayerState.PAUSED:
        onPlayerStop()
        return "paused";
      case YT.PlayerState.ENDED:
      case YT.PlayerState.CUED:
        onPlayerStop()
        return "stopped";
      default:
        return "unstarted";
    }
  }

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo()
      toggleIsPlay()
    }
  }

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo()
      toggleIsPlay()
    }
  }

  // const handleStop = () => {
  //   if (playerRef.current) {
  //     playerRef.current.stopVideo();
  //     setPlayerState("stopped");
  //   }
  // };

  let intervalId: any
  const onStateChange = (event: any) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      intervalId = setInterval(() => {
        setCurrentTime(event.target.getCurrentTime());
      }, 100);
    }
  }

  const onPlayerStop = () => {
    clearInterval(intervalId)
  }
  
  return (
      <PlayerBox>
        {/* <script src="https://www.youtube.com/iframe_api"></script> */}
        <PlayerVideoBox>
        <YouTube
            opts={{
              width: "70",
              height: "70",
              playerVars: {
                rel: 0,
                modestbranding: 1
              }
            }}
            videoId={videoId}
            onReady={handlePlayerReady}
            onStateChange={handlePlayerStateChange}
            onEnd={(event)=>{event.target.stopVideo(0);}} 
            />
        </PlayerVideoBox>
        {/* <ProgressBar
          now={currentTime}
          max={props.duration}
          label={`${Math.floor(currentTime)}s`}
        /> */}
        { isPlay ? (<PlayButton onClick={handlePause}>
              ||
        </PlayButton>) : (<PlayButton onClick={handlePlay}>
              ▶
          </PlayButton>)}
    </PlayerBox>
  );
}


export default VideoPlayer