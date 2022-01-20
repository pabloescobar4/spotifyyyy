import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function SpPlayer({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)
    console.log(accessToken);
  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}
