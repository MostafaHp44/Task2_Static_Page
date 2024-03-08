"use client"
import { useState } from 'react';
import logo from './logo/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import profile from './logo/Profile.jpg'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Image from "next/image";


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-around items-center bg-white p-5 sm:hidden'>

      <button onClick={toggleMenu} className="block lg:hidden">
        <svg
          className="fill-current text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            d="M3 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3zm1-2h16V8H4v8zm10-6h2V5h-2v5zM3 3h18v2H3V3z"
          />
        </svg>
      </button>


        <div className="flex gap-3.5">
            <SearchIcon/>

            <NotificationsNoneOutlinedIcon/>
        </div>

        <div className="flex justify-around items-center gap-3.5">
          <Image src={profile} alt="mazaady" className="w-10 h-10 cursor-pointer rounded-xl	"></Image>
        </div>


      {isOpen && (
        <div className="lg:hidden">
          <ul className="bg-gray-100 p-4">
            <li>
              <a href="#" className="block py-2 text-gray-800 hover:bg-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-gray-800 hover:bg-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-gray-800 hover:bg-gray-300">
                Gifts
              </a>
            </li>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
