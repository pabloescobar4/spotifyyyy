import React from "react";
import Newdata from "./Home/HomeData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faFolderOpen,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SpPlayer from "./ShanPlayer";

const accessToken =
  "BQDDuyxzDmmeAPmgskhAEBUy-L6PF57ufGTgmrH52oNgxR-iWv2I0_3jacxYnQJr5QDI9xvopJg8QerorPiao1XmYq1Lqjj5cmhG0WHXtCLMbfznTyALiPuz3hxgIkC1UUdzvEJPvigV0-wHIOURxxL2clpxOaCV1ByqQYxJirHH5MIXtb7A8KRbrOfxcA3CerbDXQFjgLY7fDQPGZf5Fw";

function SideBar(props) {
  return (
    <div style={{ width: "16%" }}>
      <div className="flex relative">
        <div className="w-2/12 h-full bg-black mb-2 text-gray-100 p-6 fixed ">
          <img
            className="mb-4 w-4/6"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
          />
          <div className="p-2  mt-6 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
            <FontAwesomeIcon icon={faHome} size="lg" color="white" />
            <div className="ml-4">
              <Link to="/">
                <button className="font-bold">Home</button>
              </Link>
            </div>
          </div>
          {/* <div className="p-2  font-bold hover:bg-zinc-800 hover:rounded-md ml-3 text-stone-300 antialiased  hover:text-white flex hover:bg-zinc-800 hover:rounded-md">
            <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
            <div className="ml-4">
              <Link to="/search">
                <button className="font-bold">Search</button>
              </Link>
            </div>
          </div> */}
          <div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
            <FontAwesomeIcon icon={faFolderOpen} size="lg" color="white" />
            <div className="ml-4">Your Library</div>
          </div>
          <div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
            <FontAwesomeIcon icon={faPlusSquare} size="lg" color="white" />
            <div className="ml-4">Create Playlist</div>
          </div>
          <div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
            <FontAwesomeIcon icon={faHeart} size="lg" color="white" />
            <div className="ml-4">Liked Songs</div>
          </div>

          <div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white">
            Playlist 1
          </div>
        </div>

        <div className="bg-gradient-to-b from-red-900 to-black w-full ml-64  ">
          {/* <div className="text-2xl font-bold hover:bg-white hover:rounded-md text-white antialiased m-6 mt-20 ">
            Your Top Mixes
          </div> */}
          {/* 
          <Newdata />
          <Newdata />
          <Newdata />
          <Newdata />
          <Newdata />
          <Newdata /> */}
        </div>
      </div>
      <div className="ml-32">{/* <Search /> */}</div>
      <div className="relative">
        {/* <div className=" flex bg-zinc-800 w-full h-24 fixed bottom-0 left-0 right-0"> */}

        <div className=" left-0 bottom-0 w-screen  fixed">
          {/* newgsdfgvvbdfzvvdavadfv dfv  zxvvd dsfvca */}
          {/* <SpPlayer accessToken={accessToken}  /> */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

//  1 sidebar  2 player 3  homedata
// //  sidebar player 4 SearchData
