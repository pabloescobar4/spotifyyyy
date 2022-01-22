import React from "react";
// import SearchData from "./SearchData";

//Search + Player
import "./Search.css";
import SpPlayer from "./ShanPlayer";
import { TrackSearchResult } from "./TrackSearchResult";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpotifyWebApi from "spotify-web-api-node";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchData from "./Search/SearchData";
import { Dropdown } from "./Dropdown";

const spotify = new SpotifyWebApi({
  clientId: "4ecfc05c92c4453aaf10ea23d7553452",
});
function Search() {
  function MouseOver(event) {
    event.target.style.background = '#424242';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
  // const accessToken = localStorage.getItem("token");
  const [search, setSearch] = React.useState("");
  const { accessToken } = useSelector((state) => ({
    accessToken: state.token,
  }));
  console.log(accessToken, "djbbjh");

  const [playingTrack, setPlayingTrack] = React.useState();
  const [searchResults, setSearchResults] = React.useState([]);

  const [playlist, setPlaylist] = React.useState([]);
  const [party, setParty] = React.useState([]);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    console.log(track);
    setSearch("");
  };

  React.useEffect(() => {
    if (!accessToken) return;
    spotify.setAccessToken(accessToken);
  }, [accessToken]);

  React.useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotify.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallimage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images[0]);
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            album: smallimage.url,
          };
        })
      );

      return () => (cancel = true);
    });
  }, [search, accessToken]);

  const navigate = useNavigate();

  React.useEffect(() => {
    spotify
      .getFeaturedPlaylists({ limit: 5, offset: 1, country: "IN" })
      .then((playlists) => {
        console.log(playlists.body.playlists.items[0].name);
        setPlaylist(
          playlists.body.playlists.items.map((playlist) => {
            return {
              image: playlist.images[0].url,
              title: playlist.name,
              id: playlist.id,
              description: playlist.description,
              uri: playlist.uri,
            };
          })
        );
      });
    spotify
      .getPlaylistsForCategory("party", {
        limit: 5,
        offset: 2,
      })
      .then((playlists) => {
        setParty(
          playlists.body.playlists.items.map((playlist) => {
            return {
              image: playlist.images[0].url,
              title: playlist.name,
              id: playlist.id,
              description: playlist.description,
              uri: playlist.uri,
            };
          })
        );
      });
  }, [accessToken]);

  return (
    <div
      style={{
        width: "84%",
        paddingBottom: "20px",
        height: "100vh",
        color: "white",
      }}
    >
      
      <div className=" relative  bg-black" style={{ margin: "55px 0" }}>
        <div className="text-white w-full  h-16 bg-black 0  -mt-10 flex p-3 fixed">
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

          <form
            action="/"
            method="get"
            className="bg-white w-3/12 rounded-full p-2 ml-10 h-10 "
          >
            <label htmlFor="header-search" className=" ">
              <FontAwesomeIcon
                icon={faSearch}
                size="1x"
                color="gray"
                className="ml-1"
              />
            </label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" ml-2 w-3/4 text-black sudo"
              type="text"
              id="header-search"
              placeholder="Artists, Songs,podcasts"
            />
            {search ? (
              <div
                style={{ overflowY: "scroll", height: "40vh", width: "25vw" }}
                className="flex-grow-1 my-2  w-full h-1/6 output"
              >
                {searchResults.map((track) => (
                  <TrackSearchResult
                    track={track}
                    chooseTrack={chooseTrack}
                    key={track.uri}
                  />
                ))}
              </div>
            ) : null}
          </form>
          <div className="fixed top-10 right-0"><Dropdown/></div>
        </div>
      </div>
      
      {!search ? (
        <div style={{ margin: "20px 0" }}>
          <h1
            style={{
              color: "white",
              margin: "80px 0 0 15px",
              fontSize: "30px",
            }}
          >
            Top Playlists
          </h1>
          <div className="flex my-2">
            {playlist.map((track) => (
              <div
                key={track.uri}
                onClick={() =>
                  navigate(`/playlist/${track.id}`, {
                    state: {
                      description: track.description,
                      image: track.image,
                      name: track.title,
                    },
                  })
                }
                style={{ cursor: "pointer",paddingTop:"8px",borderRadius:"5px"}} onMouseOver={MouseOver} onMouseOut={MouseOut}
              >
                <img
                  src={track.image}
                  alt={track.name}
                  style={{ width: "75%",margin:"auto"}}
                />
                <p style={{ marginLeft: "30px" }} >{track.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-black" style={{ height: "80vh" }}></div>
      )}
      {!search ? (
        <div>
          <h2
            style={{
              color: "white",
              margin: "20px 0 0 15px",
              fontSize: "30px",
            }}
          >
            Party
          </h2>
          <div className="flex my-2">
            {party.map((track) => (
              <div
                key={track.uri}
                onClick={() =>
                  navigate(`/playlist/${track.id}`, {
                    state: {
                      description: track.description,
                      image: track.image,
                      name: track.title,
                    },
                  })
                }
                style={{ cursor: "pointer",paddingTop:"8px",borderRadius:"5px"}} onMouseOver={MouseOver} onMouseOut={MouseOut}
              >
                <img
                  src={track.image}
                  alt={track.name}
                  style={{ width: "75%",margin:"auto"}}
                />
                <p style={{ marginLeft: "30px" }}>{track.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-black" style={{ height: "80vh" }}></div>
      )}

      {/* <div className="relative"> */}
      {/* <div className=" flex bg-zinc-800 w-full h-24 fixed bottom-0 left-0 right-0"> */}

      <div className=" left-0 bottom-0 w-screen  fixed">
        {/* newgsdfgvvbdfzvvdavadfv dfv  zxvvd dsfvca */}
        <SpPlayer trackUri={playingTrack?.uri} />
      </div>
      {/* </div> */}
      
    </div>
  );
}

export default Search;
