import React from "react";
// import { useState, useEffect } from "react";
import "./Player.css";
// import Player1 from "./components/Player1";
import SideBar from "./components/SideBar";
// import Spotify1 from "./components/B1";
import { Route, Routes } from "react-router-dom";
// import Search from "./components/.Search_Player";
// import FinalPlayer from "./components/Player/FinalPlayer";
// import Spot from "./components/.Sidebar_new";
// import A2 from "./components/.Player_Only";
import A1 from "./components/.Search_Player";
import { Playlistpage } from "./components/Playlistpage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Landing } from "./components/Landing";
import { useDispatch } from "react-redux";
import { getTokenFromResponse}  from './components/utils/spotify'
import {TokenContext} from "./components/Contexts/TokenContext"
import SpotifyWebApi from "spotify-web-api-js";
import { addTokenSuccess } from "./components/redux/actions";
import SpPlayer from "./components/ShanPlayer";

function App() {
  // const navigate = useNavigate();
  const { handleToken } = React.useContext(TokenContext);
  const dispatch = useDispatch();
    const spotify = new SpotifyWebApi();
    React.useEffect(() => {
        // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let _token = hash.access_token;
      // console.log("token",_token);
      _token ? collectToken(_token) : <div>Incorrect Login credentials</div>;
    }, []);
    
  const collectToken = (token) => {
      // console.log(token);
      spotify.setAccessToken(token);
      handleToken(token);
      dispatch(addTokenSuccess(token));
    }

  return (
    //flex
    <div className="bg-black">
      <div className="">
        <Routes>
          <Route
            path="/playlist/:id"
            element={
              <div style={{display: 'flex', width : "100%"}}>
                <SideBar/>
                <Playlistpage />
                <div className=" left-0 bottom-0 w-screen  fixed">
                  <SpPlayer/>
                </div>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <div style={{display: 'flex', width : "100%"}}>
                  <SideBar />
                  {/* <A2 /> */}
                  <A1 />
                  <div className=" left-0 bottom-0 w-screen  fixed">
                      <SpPlayer/>
                  </div>
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
