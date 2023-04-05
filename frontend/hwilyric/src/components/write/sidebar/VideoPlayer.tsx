import { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import YouTube from "react-youtube";
import ProgressBar from "react-bootstrap/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { PlayVideoId } from "../../../atoms/youtubeVideoAtoms";
import { PlayerBox, PlayerVideoBox, PlayButton, PlayerProgressBox, PlayerButtonBox } from "../../../styles/writeNoteStyle";

function VideoPlayer() {
  const playerRef = useRef<YT.Player | null>(null)
  const ytInterval = useRef<NodeJS.Timer | null> (null)
  const videoId = useRecoilValue(PlayVideoId)

  const [isPlay, setIsPlay] = useState(false)
  const [time, setTime] = useState(0)
  const [durationTime, setDurationTime] = useState(0);
  
  const [hourTime, setHourTime] = useState<string>('00')
  const [minTime, setMinTime] = useState<string>('00')
  const [secTime, setSecTime] = useState<string>('00')
  
  const handlePlay = () => {
    setIsPlay(()=>true);
    if(playerRef.current) {playerRef.current.playVideo()};
  }
            
  const handlePause = () => {
    setIsPlay(()=>false);
    if(playerRef.current) {playerRef.current.pauseVideo()}
  }

  const handlePlayerStateChange = (event: YT.OnStateChangeEvent) => {
    const ytState = event.data;
    if (ytState === 1) { // playing
      setIsPlay(() => true); 
    }
    else if (ytState === 2){ // pause
      setIsPlay(() => false);
    }
    else if (ytState === 5){ // get signal
      playerRef.current = event.target;
      setDurationTime(() => event.target.getDuration());
      if (videoId) {
        playerRef.current.playVideo()
      }
    } 
    else if (ytState === -1) { // initialize
      setIsPlay(() => false);
      setTime(() => 0);
      setHourTime(() => '00');
      setMinTime(() => '00');
      setSecTime(() => '00');
      console.log(ytInterval.current)
      if (ytInterval.current) {clearTimer()}
    }
  }

  const setTimer = (event: any) => {
    if (ytInterval.current) {clearTimer()}
    ytInterval.current = setInterval(() => {
      let currentTime = event.target.getCurrentTime();
      setTime(() => Math.floor(currentTime))
      secondToHourMinute(currentTime)
    },100)
  }

  const clearTimer = () => {
    if (ytInterval.current) {
      clearInterval(ytInterval.current)
    };
  }

  const secondToHourMinute = (t: number) => {
    const hour: number = Math.floor(t / 3600)
    const min: number = Math.floor((t % 3600) / 60)
    const sec: number = Math.floor(t % 60)

    setHourTime(() => (hour < 10) ? '0' + String(hour) : String(hour))
    setMinTime(() => (min < 10) ? '0' + String(min) : String(min))
    setSecTime(() => (sec < 10) ? '0' + String(sec) : String(sec))
  }            
  
    return (
      <PlayerBox>
        <PlayerVideoBox>
          <YouTube
            opts={{
              width: "60",
              height: "60",
              playerVars: {
                rel: 0,
                modestbranding: 1
              }
            }}
            videoId={videoId}
            onPlay={setTimer}
            onPause={clearTimer}
            onStateChange={handlePlayerStateChange}
          />
        </PlayerVideoBox>
        <PlayerProgressBox>
          <ProgressBar
            style={{width: '100%'}}
            now={time}
            max={durationTime}
          />
          <p>{`${hourTime}:${minTime}:${secTime}`}</p>
        </PlayerProgressBox>
        <PlayerButtonBox>
          {isPlay ? (<PlayButton onClick={handlePause}>
            ||
          </PlayButton>) : (<PlayButton onClick={handlePlay}>
            ▶
          </PlayButton>)}
        </PlayerButtonBox>
      </PlayerBox>
    );
  }


export default VideoPlayer