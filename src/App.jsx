import React from "react";
// import { useState, useEffect } from "react";
import "./Player.css";

// import Player1 from "./components/Player1";
import SideBar from "./components/SideBar";
// import Spotify1 from "./components/B1";
import { Route, Routes, useNavigate } from "react-router-dom";
// import Search from "./components/.Search_Player";
// import FinalPlayer from "./components/Player/FinalPlayer";
// import Spot from "./components/.Sidebar_new";
import A2 from "./components/.Player_Only";
import A1 from "./components/.Search_Player";
import { Playlistpage } from "./components/Playlistpage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Landing } from "./components/Landing";
import { useDispatch } from "react-redux";
import { getTokenFromResponse}  from './components/utils/spotify'

import SpotifyWebApi from "spotify-web-api-js";
import { addTokenSuccess } from "./components/redux/actions";

function App() {
 const navigate = useNavigate();
  const dispatch = useDispatch();
    const spotify = new SpotifyWebApi();
    React.useEffect(() => {
        // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let _token = hash.access_token;
      _token ? collectToken(_token) : <div>Incorrect Login credentials</div>;
    }, []);
    
    const collectToken = (token) => {
      spotify.setAccessToken(token);
      dispatch(addTokenSuccess(token));
      console.log(token);
      navigate("/welcome");
    }

  return (
    //flex
    <div className="bg-black">
      <div className="">
        <Routes>
          <Route
            path="/search"
            element={
              <div>
                {/* <A1 /> */}
                {/* <Spotify1 /> */}
                {/* <FinalPlayer /> */}
                {/* <Player1
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      /> */}
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                {/* <Spot /> */}
                {/* <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      /> */}
              </div>
            }
          />

          <Route
            path="/playlist/:id"
            element={
              <div>
                <SideBar />
                <Playlistpage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <div>
                  <SideBar />
                  <A2 />
                  <A1 />
                </div>
              </PrivateRoute>
            }
          />
          <Route path="/welcome" element={<Landing/>} />
        </Routes>


        {/* <Spotify /> */}
      </div>
    </div>
  );
}

export default App;
