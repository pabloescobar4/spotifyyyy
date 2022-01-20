import React from "react";
import {
 faHeart
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function PlayerDetails(props) {
  return (
    <div className="music-player--details ml-2 mt-2 mr-5 flex">
      <div className="details-img">
        <img
          className="w-20"
          src={props.song.img_src}
          alt={props.song.title}
        />
      </div>
      <div class="range"></div>
      <div className="artist-info text-white ">
        <h3 className="details-title ml-12 font-bold">{props.song.title}</h3>
        <h4 className="details-artist ml-12">{props.song.artist}</h4>
        <div class="line"></div>
        {/* <i class="fas fa-heart"></i> */}
       
   
      </div>
      <div className="ml-5 hover:text-black">
        <FontAwesomeIcon icon={faHeart } size="lg" color="white" hover="black" />
        </div>
    </div>
  );
}

export default PlayerDetails;
