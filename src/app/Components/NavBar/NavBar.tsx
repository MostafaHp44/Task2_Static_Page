import Image from "next/image";
import React from "react";
import logo from './logo/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import profile from './logo/Profile.jpg'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
const NavBar=()=>
{
return(

    <div className=" hidden sm:flex justify-around items-center bg-white p-5">

        <div >
            <Image src={logo} alt="mazaady" className="w-40 cursor-pointer	"></Image>
        </div>

        <ul className="list-none flex justify-around items-center text-slate-500 gap-3.5 cursor-pointer font-nunito">
            <li   className="active:text-red-600 active:font-black">Home</li>
            <li   className="active:text-red-600 active:font-black">Blog</li>
            <li   className="active:text-red-600 active:font-black">Gifts</li>
        </ul>

        <div className="flex gap-3.5">
            <SearchIcon/>

            <NotificationsNoneOutlinedIcon/>
        </div>

        <div className="flex justify-around items-center gap-3.5">

        <Image src={profile} alt="mazaady" className="w-10 h-10 cursor-pointer rounded-xl	"></Image>

        <button className="bg-gradient-to-r from-red-500 to-orange-700 p-3 rounded-xl  cursor-pointer font-nunito text-white font-black"><AddCircleOutlineOutlinedIcon/> Add New Producat</button>

        </div>

        <div className="flex justify-around items-center gap-3.5">
            <LanguageOutlinedIcon/>
            |
            <span>EN</span>
        </div>

    </div>
)
}

export default NavBar