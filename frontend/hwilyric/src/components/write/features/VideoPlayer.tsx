import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import YouTube from "react-youtube";
import ProgressBar from "react-bootstrap/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { PlayVideoId } from "../../../atoms/YoutubeVideoAtoms";
import { PlayerBox, PlayerVideoBox, PlayButton } from "../../../styles/VideoPlayerStyles";

type PlayerState = "playing" | "paused" | "stopped" | "unstarted";



function VideoPlayer() {
  const [playerState, setPlayerState] = useState<PlayerState>("unstarted")
  const playerRef = useRef<YT.Player | null>(null)
  const videoId = useRecoilValue(PlayVideoId)

  const [isPlay, setIsPlay] = useState(false)
  const toggleIsPlay = () => setIsPlay(!isPlay)

  const currentTime = useRef<number>(0);
  const [durationTime, setDurationTime] = useState(0);
  
  const [hourTime, setHourTime] = useState<string>('00')
  const [minTime, setMinTime] = useState<string>('00')
  const [secTime, setSecTime] = useState<string>('00')
  
  
  const handlePlayerReady = (event: YT.PlayerEvent) => {
    setDurationTime(event.target.getDuration())
    playerRef.current = event.target
  }
  
  const handlePlayerStateChange = (event: YT.OnStateChangeEvent) => {
    setPlayerState(() => getPlayerState(event.data))
    onCurrentChange(event)
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
      onPlayerStop()
      clearInterval(intervalId)
      toggleIsPlay()
    }
  }
            
  const secondToHourMinute = () => {
    const now = currentTime.current
    const hour: number = Math.floor(now / 3600)
    const min: number = Math.floor((now % 3600) / 60)
    const sec: number = (now % 60)

    setHourTime(() => (hour < 10) ? '0' + String(hour) : String(hour))
    setMinTime(() => (min < 10) ? '0' + String(min) : String(min))
    setSecTime(() => (sec < 10) ? '0' + String(sec) : String(sec))
  }
  
  let intervalId: NodeJS.Timer
  const onCurrentChange = (event: any) => {
    if (playerState === "playing") {
      intervalId = setInterval(() => {
        currentTime.current = Math.floor(event.target.getCurrentTime())
        secondToHourMinute()
        console.log("멈췄을까?")
      }, 100);
    } else if (
      event.data === YouTube.PlayerState.PAUSED ||
      event.data === YouTube.PlayerState.ENDED
    ) {
      clearInterval(intervalId);
    }
  }

    const onPlayerStop = () => {
      clearInterval(intervalId)
    }
  
    return (
      <PlayerBox>
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
            onPlay={handlePlayerStateChange}
            onPause={handlePlayerStateChange}
            onStateChange={handlePlayerStateChange}
            onEnd={(event) => { event.target.stopVideo(0); }}
          />
        </PlayerVideoBox>
        <ProgressBar
          now={currentTime.current}
          max={durationTime}
        />
        <p>{`${hourTime}:${minTime}:${secTime}`}</p>
        {isPlay ? (<PlayButton onClick={handlePause}>
          ||
        </PlayButton>) : (<PlayButton onClick={handlePlay}>
          ▶
        </PlayButton>)}
      </PlayerBox>
    );
  }


export default VideoPlayer