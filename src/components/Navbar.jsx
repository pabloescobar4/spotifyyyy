import react, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"
import { loginUrl}  from './Spotify'
// import ScrollIntoVie w from "react-scroll-into-view";
import { Link } from 'react-router-dom';

export const Navbar=()=>{
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="sticky top-0 z-20 items-center justify-between p-4 text-xl bg-black md:flex text-white h-16">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl ml-0 sm:ml-20"><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className="w-20 sm:w-32"/></h3>

        {showNav ? (
          <AiOutlineClose
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden "
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-8 text-3xl text-left" : "-left-full text-lg") +
          " md:static fixed bottom-0 top-16 md:flex md:space-x-7 md:bg-transparent bg-black md:w-auto w-full md:text-white text-white md:space-y-0 space-y-5 p-2 transition-left ease-in pr-24"
        }
      >
        <div>
        <div className="cursor-pointer hover:text-green-500 font-bold">Premium</div>
        </div>
        <div>
        <div className="cursor-pointer hover:text-green-500 font-bold">Support</div>
        </div>
        <div>
        <div className="cursor-pointer hover:text-green-500 font-bold">Download</div>
        </div>
        <div>
        <div className="">{showNav ? "—" : "|"}</div>
        </div>
        <div>
        <div className={(showNav ? "font-light":"font-bold")+" cursor-pointer hover:text-green-500"}>Sign in</div>
        </div>
        <div>
        <Link to = {"/login"} className={(showNav ? "font-light":"font-bold")+" cursor-pointer hover:text-green-500"}>Log in</Link>
        </div>
      </ul>
    </nav>
  );
}