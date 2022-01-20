import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"



export default function SpPlayer({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)
    // console.log(accessToken);
  useEffect(() => setPlay(true), [trackUri])
  //console.log(accessToken);
  if (!accessToken) return null
  return (

    <div className="bg-red-100 ">
  <SpotifyPlayer
      token={accessToken}
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
