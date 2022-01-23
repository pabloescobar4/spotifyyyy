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
      token="BQDUbPQVuNDBXNCoCDCZ4iZUXVPl2Eopi-f4WvMI5O7oNER627bp0QGg2HdfEUkbLpi14ceW8-cjR1V-Or_FU2dO70e4KpZK2eC6E_nPoI7Owi7C-mawKxI3Sda0Avf_n2Rj05QdZXOSIKaxTDazzYW6g6HFxVp-UTtOlLEliE6MrTZL3kPMr5qR3L7vZe61iCVtjaDPiy4NcQxpYeR2zQ"
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
