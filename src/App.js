import React from "react";
import { useState, useEffect } from "react";
import "./Player.css";

import Player1 from "./components/Player1";
import SideBar from "./components/SideBar";
import Spotify1 from "./components/B1";
import {Route,Routes,Link} from 'react-router-dom';
import Search from "./components/.Search_Player";
import FinalPlayer from "./components/Player/FinalPlayer"
import Spot from "./components/.Sidebar_new"
import A2 from "./components/.Player_Only"
import A1 from "./components/.Search_Player"
import { Playlistpage } from "./components/Playlistpage";

function App() {


 
  return (

    //flex
    <div className="bg-black"> 
   <div className="">
    <Routes>
       <Route path="/search" element={<div>
         {/* <A1 /> */}
       {/* <Spotify1 /> */}
       {/* <FinalPlayer /> */}
       {/* <Player1
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      /> */}
       </div>} />
       <Route path="/" element = {<div>
     {/* <Spot /> */}
       {/* <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      /> */}
       </div>}/>
       <Route path="/playlist/:id" element={<div>
        <SideBar />
       <Playlistpage />
       </div>
     
      } />

    
       </Routes> 

       <SideBar />
       <A2 />
       <A1/>
{/*        
       <Spotify /> */}
   </div>
   

     
       
     
        
       
        
   
 
    </div>
  
  )
}

export default App;
