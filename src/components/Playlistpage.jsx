import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useParams,useLocation } from "react-router-dom";

const spotify = new SpotifyWebApi({
    clientId: "8fe4c46b800e46518fd2bfca5a389378"
});
export const Playlistpage = () => {
    const [songs, setSongs] = React.useState([]);
    const { id } = useParams();
    const state = useLocation();
    const {description} = state.state;
    const token = "BQBFWtqt9kOzGQz5XGBUgIoRL080AjwZ9fG7mk7LBk3-i9Fu4U4ooys0iPqkWEWsTWZnrELSYufKASTrEudcVL7S7lS2GjROTbcEwGKLsjG-_FSFu_g4oyOfRGBtI-h4AsnOOtGpnvE_MGGgTlaSGwck0HbH1tXUU0IbucK-Y-VwFP-C0mEYscaVNk8o2JartnhEsx_-zP0RQxmo-GLptQ";
    spotify.setAccessToken(token);
    React.useEffect(() => {
        spotify.getPlaylistTracks(id).then((tracks) => {
            // console.log(tracks);
            setSongs(tracks.body.items.map((song) => {
                return {
                    track: song.track.uri,
                    playerImage: song.track.album.images[2].url,
                    image: song.track.album.images[0].url,
                    title: song.track.name,
                    artist: song.track.artists[0].name,
                    album: song.track.album.name,
                    duration: song.track.duration_ms,
                }
            }))
        });
    }, [id]);
    return (
        songs.length > 0 ? <div style={{backgroundColor:"#632626",color:"#fff"}}>
            <div>{description}</div>
            {songs.map((song,i) => {
                return (
                    <div style={{display: 'flex', justifyContent : "space-around", cursor : 'pointer'}} key={song.uri} className="songs" onClick={()=>console.log(song.track)}>
                        <p>{i + 1}</p>
                        <img src={song.playerImage} alt="songimage"/>
                        <div>
                            <p>{song.title}</p>
                            <p>{song.artist}</p>
                        </div>
                        {/* <p>{song.album}</p> */}
                        <p>{Math.floor(song.duration / 1000 / 60)}:{Math.floor((song.duration / 1000) % 60)}</p>
                    </div>
                )
            })}
        </div> : <div></div>
    )
}