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
      token="BQCCMVmsraqJt9gNkphZY6-iyZCn2OHlGcBdkEammls01sWFCIPJ0qh8CWeZx_V3XE3_KZzTcp0JuVKP1Za5PA9EcwdPhEbI1MIADQb5oTprWIEBlGYrDxMSpFhnV70O1dHBzVg1-O_u-hn39mLH-IhpCT1Mp29Wt_VNE38YIOQZ0C-knnOB5Ho3ToqLt96czg08PyKagLTHyfnRTHa-Vw"
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
