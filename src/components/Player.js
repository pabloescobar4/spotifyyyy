import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <>
    <div className="relative mt-64">
    <div className=" flex bg-zinc-800 w-full h-24 fixed bottom-0 left-0 right-0">
        
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioElement}
        ></audio>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

        <div class="player__footer flex ml-48 mt-4">
          <ul class="list list--footer">

                <i class="fa fa-ellipsis-h ml-2 fa-lg" size="lg" color="white"></i>
             
                <i class="fa fa-random ml-2 fa-lg" size="lg" color="white"></i>
             
                <i class="fa fa-undo ml-2 fa-lg" size="lg" color="white"></i>

          </ul>
        </div>

        {/* <h4>Lofi Music Player React </h4> */}
      </div>
    </div>
    
    </>
  );
}
export default Player;
