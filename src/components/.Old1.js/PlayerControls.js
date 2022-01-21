import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay ,
  faPlayCircle,
  faPause,
  faForward,
  faBackward,
 
} from "@fortawesome/free-solid-svg-icons";


function PlayerControls(props) {
  return (
    <div className="ml-96 ">
      <button className="skip-btn  mt-3" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} size="lg" color="white" />
      </button>
      <button
        className="play-btn ml-5 mb-2 mt-6"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlayCircle} size="lg" color="white" />
      </button>


     
      <button className="skip-btn ml-5 mt-4" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward } size="lg" color="white" />
      </button>
    
    </div>
  );
}

export default PlayerControls;
