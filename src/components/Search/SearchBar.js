import React from 'react'
import SearchData from './SearchData'
import Player from './Player'
import {

	faChevronLeft,
	faChevronRight,
	fas,
	faSearch
	
   } from "@fortawesome/free-solid-svg-icons";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search(){

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
		
		className=" ml-2 w-3/4 text-black"
            type="text"
            id="header-search"
            placeholder="Artists, Songs,podcasts"
            name="s" 
        />
        <button type="submit"></button>
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