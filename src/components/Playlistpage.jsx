import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useParams, useLocation,useNavigate } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addTrackSuccess } from "./redux/actions";
const spotify = new SpotifyWebApi({
    clientId: "8fe4c46b800e46518fd2bfca5a389378"
});
export const Playlistpage = () => {
    const [songs, setSongs] = React.useState([]);
    const [playingTrack, setPlayingTrack] = React.useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    const state = useLocation();
    const navigate = useNavigate();
    const { description, image, name } = state.state;
    const { token } = useSelector((state) => ({
        token: state.token,
    }));
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
        <div style={{ width: "84%" }}>
            <div style={{ marginLeft: "25px" }}>
            <FontAwesomeIcon
            icon={faChevronLeft}
            size="lg"
            color="white"
            className="m-1 ml-10 mt-2"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            color="white"
            className="m-1 ml-8 mt-2"
            onClick={() => navigate(+1)}
            style={{ cursor: "pointer" }}
          />
            </div>
        <div style={{ backgroundColor: "black", color: "#fff",marginTop : "-30px",paddingTop : "20px" }}>
            <div style = {{display: "flex",margin: "50px 65px"}}>
            <img src = {image} alt="playlistimg" style = {{width: "150px"}}/>
                <div style={{ marginTop: "inherit", marginLeft: "15px" }} >
                    <p>Playlist</p>
                    <p style={{fontSize: "50px"}}>{name}</p>
                    <p>{description}</p>
            </div>
                </div>
                <div style={{display: "flex",justifyContent : "space-around", margin: "10px 0"}}>
                    <p>#</p>
                    <p style={{width:"380px"}}>TITLE</p>
                    <p style={{width:"300px"}}>ALBUM</p>
                    <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 hDgDGI" fill="#ffffff" ><path d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14C3.916 14 1 11.084 1 7.5S3.916 1 7.5 1 14 3.916 14 7.5 11.084 14 7.5 14z"></path><path fill="none" d="M16 0v16H0V0z"></path></svg>
                </div>
            {songs.map((song,i) => {
                return (
                    <div style={{display: 'flex', justifyContent : "space-around", cursor : 'pointer', margin : "10px 0"}} key={song.uri} className="songs" onClick={()=>dispatch(addTrackSuccess(song.track))}>
                        <p>{i + 1}</p>
                        <div>
                            <img src={song.playerImage} alt="songimage"/>
                        </div>
                        <div style={{width:"200px"}}>
                            <p>{song.title}</p>
                            <p>{song.artist}</p>
                        </div>
                        <p style={{width:"300px"}}>{song.album}</p>
                        <p>{Math.floor(song.duration / 1000 / 60)}:{Math.floor((song.duration / 1000) % 60)}</p>
                    </div>
                )
            })}
        </div>
        
    </div>
    )
}