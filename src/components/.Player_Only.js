import React from "react";
// import SearchData from "./SearchData";
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
import SearchData from "./Search/SearchData";
const spotify = new SpotifyWebApi({
  clientId: "4ecfc05c92c4453aaf10ea23d7553452",
});
function A2() {
  const accessToken =
    "BQBFWtqt9kOzGQz5XGBUgIoRL080AjwZ9fG7mk7LBk3-i9Fu4U4ooys0iPqkWEWsTWZnrELSYufKASTrEudcVL7S7lS2GjROTbcEwGKLsjG-_FSFu_g4oyOfRGBtI-h4AsnOOtGpnvE_MGGgTlaSGwck0HbH1tXUU0IbucK-Y-VwFP-C0mEYscaVNk8o2JartnhEsx_-zP0RQxmo-GLptQ";
  const [search, setSearch] = React.useState("");
  const [playingTrack, setPlayingTrack] = React.useState();
  const [searchResults, setSearchResults] = React.useState([]);

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

  return (
    <div>
    <div className="relative">
{/* <div className=" flex bg-zinc-800 w-full h-24 fixed bottom-0 left-0 right-0"> */}

<div className=" left-0 bottom-0 w-screen  fixed">
  {/* newgsdfgvvbdfzvvdavadfv dfv  zxvvd dsfvca */}
  <SpPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />
</div>
</div>
    </div>
  );
}

export default A2;
