import React from 'react';
import { NavLink } from 'react-router-dom';
import {assets} from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
      <img src={assets.logo} className='mt-5 w-[max(10vw,100px)] hidden sm:block' alt="Logo" />
      <img src={assets.logo_small} className='mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block' alt="Small Logo" />
      <div className='flex flex-col gap-5 mt-10'>
        <NavLink to="/add-song" className='flex items-center gap-2.5 text-grey-800 bg-white border border-black p-2 pr-[max(8vw,10px)] rounded-[max(2vw,5px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium' activeClassName='active'>
          <img src={assets.add_song} className='w-5' alt="Add Song" />
          <p className='hidden sm:block'>Add Song</p>
        </NavLink>
        <NavLink to="/list-song" className='flex items-center gap-2.5 text-grey-800 bg-white border border-black p-2 pr-[max(8vw,10px)] rounded-[max(2vw,5px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium' activeClassName='active'>
          <img src={assets.song_icon} className='w-5' alt="List Song" />
          <p className='hidden sm:block'>List Song</p>
        </NavLink>
        <NavLink to="/add-album" className='flex items-center gap-2.5 text-grey-800 bg-white border border-black p-2 pr-[max(8vw,10px)] rounded-[max(2vw,5px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium' activeClassName='active'>
          <img src={assets.add_album} className='w-5' alt="Add Album" />
          <p className='hidden sm:block'>Add Album</p>
        </NavLink>
        <NavLink to="/list-album" className='flex items-center gap-2.5 text-grey-800 bg-white border border-black p-2 pr-[max(8vw,10px)] rounded-[max(2vw,5px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium' activeClassName='active'>
          <img src={assets.album_icon} className='w-5' alt="List Album" />
          <p className='hidden sm:block'>List Album</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;