import React from 'react';
// import SearchData from "./SearchData";
import './Search.css';
import SpPlayer from './ShanPlayer';
import { TrackSearchResult } from './TrackSearchResult';
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpotifyWebApi from 'spotify-web-api-node';
import { useNavigate } from 'react-router-dom';
import SearchData from './SearchData';
const spotify = new SpotifyWebApi({
  clientId: '4ecfc05c92c4453aaf10ea23d7553452',
});
function Search() {
  const accessToken =
    'BQA_-8OOxxubzmxXq_20EAgGIKpDtDYqFszKiHBEileb74F8pN773LyZ04PfPcEF5RceEzeFm5PHPDyGTeSe-8tMx1l9QhTJHnlM2j4nu6d8MbURxwpyW3NBStwpD1mtlKa3gGK8dxX6ROjoHjMJEzvbCNaZ8yqqw-fRx7sG5jkDInHCTZcRmBNzNSqj7TRoCVQjQgyAUinf6oL64wmzcA';
  const [search, setSearch] = React.useState('');
  const [playingTrack, setPlayingTrack] = React.useState();
  const [searchResults, setSearchResults] = React.useState([]);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    console.log(track);
    setSearch('');
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
      <div className=" ml-32 relative  bg-black">
        <div className="text-white w-full  h-16 bg-black 0  -mt-10 flex p-3 fixed">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="lg"
            color="white"
            className="m-1 ml-10 mt-2"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            color="white"
            className="m-1 ml-8 mt-2"
            onClick={() => navigate(+1)}
            style={{ cursor: 'pointer' }}
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
            <div
              style={{ overflowY: 'scroll', height: '40vh', width: '25vw' }}
              className="flex-grow-1 my-2  w-full h-1/6"
            >
              {searchResults.map((track) => (
                <TrackSearchResult
                  track={track}
                  chooseTrack={chooseTrack}
                  key={track.uri}
                />
              ))}
            </div>
            {/* <div className="w-96 h-48 bg-red-100 flex mt-48"> */}

            {/* 
          <div className="relative mt-64">
    <div className=" flex bg-zinc-800 w-full h-24 fixed bottom-0 left-0 right-0">
        
    <div class="player__footer flex ml-48 mt-4">

      <div className="bg-red-100 w-96 h-96">
        new
      <SpPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />
 
      </div>


       
          <ul class="list list--footer">

                <i class="fa fa-ellipsis-h ml-2 fa-lg" size="lg" color="white"></i>
             
                <i class="fa fa-random ml-2 fa-lg" size="lg" color="white"></i>
             
                <i class="fa fa-undo ml-2 fa-lg" size="lg" color="white"></i>

          </ul>
        </div>

        {/* <h4>Lofi Music Player React </h4> */}
          </form>
        </div>
        <div className=" w-1/5 h-3/5 p-5 m-6 ml-24 mt-10  hover: rounded-md ">
          <div className="p-1  ">
            {search === '' ? (
              <div className="text-white text-3xl font-sans font-bold">
                Browse All
                <div className="flex space-x-12 mt-5">
                  <SearchData />
                  <SearchData />
                  <SearchData />
                  <SearchData />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* </div> */}
      </div>
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

export default Search;
