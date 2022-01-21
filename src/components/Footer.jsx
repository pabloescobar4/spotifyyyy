import react, { useState } from "react";
import {FaInstagram,FaTwitter,FaFacebookF} from "react-icons/fa";
export const Footer=()=>{
    return (
        
        <div className="py-16 sticky top-0 z-20 text-left flex flex-col sm:flex-row justify-between p-4 text-base bg-black md:flex text-white">
        <h3 className="font-bold text-2xl ml-8 sm:ml-20 mt-4"><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className="w-32"/></h3>
        <div className="mt-8 ml-8 sm:-ml-60">
        <div className="text-gray-500">Company</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">About</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Jobs</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">For the Record</div>
        </div>
        <div className="mt-8 ml-8 sm:-ml-60">
        <div className="text-gray-500">COMMUNITIES</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">For Artists</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Developers</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Advertising</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Investors</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Vendors</div>
        </div>
        <div className="mt-8 ml-8 sm:-ml-60">
        <div className="text-gray-500">USEFUL LINKS</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Support</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Web Player</div>
          <div className="hover:text-green-500 cursor-pointer mt-2">Free Mobile App</div>
        </div>
        <div className="flex flex-row text-white mt-8 ml-8">
          <FaInstagram className="mx-2 bg-gray-600 p-3 text-5xl rounded-full hover:text-green-500"/>
          <FaTwitter className="mx-2 bg-gray-600 p-3 text-5xl rounded-full hover:text-green-500"/>
          <FaFacebookF className="mx-2 bg-gray-600 p-3 text-5xl rounded-full hover:text-green-500"/>
        </div>
        </div>

    
    )
}
