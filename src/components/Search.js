import React from 'react'
import SearchData from './SearchData'
import './Search.css'
import SpPlayer from './ShanPlayer';
import { TrackSearchResult } from './TrackSearchResult'
import {

	faChevronLeft,
	faChevronRight,
	
	faSearch
	
   } from "@fortawesome/free-solid-svg-icons";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import SpotifyWebApi from "spotify-web-api-node";
function Search(){




	const spotify = new SpotifyWebApi({
		clientId: "4ecfc05c92c4453aaf10ea23d7553452"
	});

	const accessToken = "BQCftuA2eWKMo0XJVGozzQ8LOwT5NS6rt16tR9pHSVTjPPjPJnVtjmdeHLkkOYccpYzOPagccvnpoXxG3XhlRyqJclGtyWIopA3wFseLrVCTsjnz7HSCOjILRIaUHTvHbw4gbEbV3Zwitv7oTE8CnAt6I0s6ShtFRRUfNSK76KYNmowXgWCYCrNMeM91VBVyFnPB6QIFpsg6XcvQxU7udA";
    const [search, setSearch] = React.useState("");
    const [playingTrack, setPlayingTrack] = React.useState()
    const [searchResults, setSearchResults] = React.useState([]);

    const chooseTrack = (track) => {
        setPlayingTrack(track);
        setSearch("");
    }

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
            setSearchResults(res.body.tracks.items.map((track) => {
                const smallimage = track.album.images.reduce((smallest, image) => {if (image.height < smallest.height) return image;
	return smallest;
}, track.album.images[0]);
return {
	artist: track.artists[0].name,
	title: track.name,
	uri: track.uri,
	album: smallimage.url
}
}));

return () => cancel = true;
})
},[search,accessToken]);



	return(

		<div className="">
           
			<div className=" ml-32 relative  bg-black">
				<div className="text-white w-full  h-16 bg-black 0  -mt-10 flex p-3 fixed">
				<FontAwesomeIcon icon={faChevronLeft} size="lg" color="white" className="m-1 ml-10 mt-2" />
				<FontAwesomeIcon icon={faChevronRight} size="lg" color="white" className="m-1 ml-8 mt-2" />
				


				<form action="/" method="get" className="bg-white w-3/12 rounded-full p-2 ml-10 h-10 " >
        <label htmlFor="header-search"className=" " >
		<FontAwesomeIcon icon={faSearch} size="1x" color="gray" className="ml-1" />
		
		
        </label>
        <input
		value={search} onChange={e => setSearch(e.target.value)}
		className=" ml-2 w-3/4 text-black sudo"
            type="text"
            id="header-search"
            placeholder="Artists, Songs,podcasts"
            name="s" 
        />``
      <div style={{ overflowY: "scroll",height : "30vh" }} className="flex-grow-1 my-2 output w-64">
                {searchResults.map((track)=>(
                    <TrackSearchResult track={track} chooseTrack={chooseTrack} key = {track.uri}/>
                ))}
            </div>
            <div>
                <SpPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
    </form>




				</div>
						<div className=" w-1/5 h-3/5 p-5 m-6 ml-24 mt-10  hover: rounded-md ">
	
	
	<div className="p-1  ">


	<div className="text-white text-3xl font-sans font-bold">
		 Browse All
	 </div>    

<div className="flex space-x-12 mt-5">
	
<SearchData />
  <SearchData />
  <SearchData />
  <SearchData />
  

 
</div>

 

	</div>
	


</div>
		
			</div>

		</div>
	)
}

export default Search