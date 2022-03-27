import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import {useSelector} from "react-redux"


export default function SpPlayer() {
  const [play, setPlay] = useState(false)
  // const accessToken = localStorage.getItem("token");
  const {accessToken,trackUri} = useSelector((state) => ({ accessToken: state.token, trackUri : state.track }));
  useEffect(() => setPlay(true), [trackUri]);
  // console.log(track);
  if (!accessToken) return null
  return (

    <div className="bg-red-100 ">
  <SpotifyPlayer
      token="BQBUoRUFI_DGH4w0NBDDPoLaZ8TA5DPnQl09Q-SX_l_oX8jAgNZJNOum5G7lPnwN2YUTyzfmzAeq2byO4_5qswZ2SRTf2uIXUH1dBooyjaaT-tUWA0kah6PEnGV8sKRGFF1Ivk-PBMuzom2lQMrXjJuR95tyzHZKosAs-BfRToDKpZhLBkSM45ZK0lZ9SCc43hgWQ92DX39CNRGA8DiJoQ"
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      
      uris={trackUri ? [trackUri] : []}
      styles={{
        activeColor: '#fff',
        bgColor: '#000000',
        color: '#fff',
        loaderColor: '#1cb954',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
        height:"90px"
     
      }}
    />
  {/* activeColor: string;
  altColor: string;
  bgColor: string;
  color: string;
  errorColor: string;
  height: number | string;
  loaderColor: string;
  loaderSize: number | string;
  sliderColor: string;
  sliderHandleBorderRadius: number | string;
  sliderHandleColor: string;
  sliderHeight: number;
  sliderTrackBorderRadius: number | string;
  sliderTrackColor: string;
  trackArtistColor: string;
  trackNameColor: string; */}

    </div>

    
  
  )
}
