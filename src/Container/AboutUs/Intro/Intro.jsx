import  { useRef, useState } from "react";
import video from "../../../assets/meal.mp4";
import {BsPauseFill,BsFillPlayFill} from 'react-icons/bs'

import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();
  const [play, setPlay] = useState(false);
  const handleVideo = () =>{
    setPlay((prevPlayVideo) => !prevPlayVideo)
    if(play){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }
  return (
    <div className="app__video">
      <video
        src={video}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {play? (<BsPauseFill color="#fff" fontSize={30}/>)
          :(<BsFillPlayFill color="#fff" fontSize={30}/>)}
        </div>
      </div>
    </div>
  );
};

export default Intro;
