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
      token="BQDmMiTGxxewSn0T5c2m1zn6RL1Jl0829QvZemcjnxaHvvsKJfP--WhdxJa2_X4vcjqklWHTT2ZPRTvPSOxf_NsJ4fPlbTU_9sQ1JvbngJH3Brg0BI_1FjcMsERDo1I6zaFom8QYvZsFkfitTPByP-7U0uk4UDwBn4hhCiMu83JPZsBVKQXf5_QLFkj7WTZzcujCAeY1iBUTmOkpvauKOA"
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
