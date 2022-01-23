import{ Navbar } from "./Navbar"
import { Footer } from "./Footer"
import React from "react"
// import { TokenContext } from "./Contexts/TokenContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { accessUrl } from './utils/spotify';

export const Landing = () => {
    const { token } = useSelector((state) => ({ token: state.token }));

    return (
     <div>
         <Navbar />
        
   <div className="bg-blue-700 h-screen bg-[url('https://www-growth.scdn.co/static/home/bursts.svg')] bg-[length:210%] sm:bg-[center_top_-6rem] bg-[center_top_2rem] sm:bg-[length:160%]">
            <div className="text-[70px] text-green-500 font-bold leading-none text-left ml-8 pt-16 sm:ml-48 sm:text-[150px]">Listening is</div>
            <div className="text-[70px] text-green-500 font-bold leading-none text-right mr-8 sm:mr-48 sm:text-[150px]">everything</div>
            <div className="text-green-500 mt-8 px-20 text-center text-xl">Millions of songs and podcasts. No credit card needed.</div>
            <div className="text-center">
            {token ? <Link to="/"><button className="bg-green-500 py-4 px-8 rounded-full m-8 text-blue-700 font-bold hover:scale-105">Open Web Player</button></Link> : <a href={accessUrl}><button className="bg-green-500 py-4 px-8 rounded-full m-8 text-blue-700 font-bold hover:scale-105">Login</button></a>}
            </div>
        </div>
        <Footer />
     </div>
    );
}

