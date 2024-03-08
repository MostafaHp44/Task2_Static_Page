import Image from "next/image";
import React from "react";
import profile from './picprofile/Profile.jpg'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const ProfileCard=()=>{
return(

    <div className="bg-white p-5 grid rounded-2xl m-3">
        <Image src={profile} alt="profile" className="w-20 h-20 cursor-pointer rounded-3xl p-2"></Image>

        <div className="text-2xl"><span>Hala Ahmed </span></div>

        <div className="text-sm	">
            <span>I am Hala Ahmed, I am the owner of the local brand<br/>called Beauty which is for Mackeup and Skin Care.</span>
        </div>

          <div className="flex justify-around items-center">

          <div className="flex p-2 justify-center items-center gap-2.5 bg-orange-100 rounded-2xl m-2">
            
            <div>
            <PersonAddAltIcon/>
            </div>

            <div className="grid">
           <span>5</span>
           <span className="text-orange-300 font-nunito">following</span>
            </div>

           </div>

           <div className="flex p-2 justify-center items-center gap-2.5 bg-orange-100 rounded-2xl m-2">
           
           <div>
           <GroupAddIcon/>
           </div>

           <div className="grid">
          <span>15</span>
          <span className="text-orange-300 font-nunito">followers</span>
           </div>

          </div>

          <div className="flex p-2 justify-center items-center gap-2.5 bg-orange-100 rounded-2xl m-2">
           
           <div>
           <StarBorderIcon/>
           </div>

           <div className="grid">
          <span>5.2</span>
          <span className="text-orange-300 font-nunito">Rate</span>
           </div>

          </div>

          </div>
            

        <div>
        <button className="bg-gradient-to-r from-red-500 to-orange-700 p-3 rounded-xl  cursor-pointer font-nunito text-white font-black w-full m-1"> Follow</button>
        </div>

    </div>
)
}
export default ProfileCard