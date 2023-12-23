import React, { useRef, useState } from 'react';
import "./Intro.css";
import { meal } from '../../constants';
import { FaPlay, FaPause } from "react-icons/fa";

const Intro = () => {

  const [playvideo, setPlayvideo] = useState(true)
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayvideo(!playvideo)
    playvideo ? vidRef.current.play() : vidRef.current.pause();
  }

  return (
    <div className="ap__video">
      <video src={meal} ref={vidRef} type="video/mp4" loop muted />

      <div className="app__video-overlay flex__center ">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playvideo ? (
            <FaPlay size={27} color="#DCCA87" />
          ) : (
            <FaPause size={27} color="#DCCA87" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro