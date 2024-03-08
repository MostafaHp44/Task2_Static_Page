"use client"
import React, { useState } from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from "next/image";
import logo from './logo/logo.png'
import qr from './logo/qr.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const QRCard=()=>{

    const [open,setopen]=useState(true)

    const handelopen=()=>{
        setopen(current=>!current)
    }
return(
    <>
    
    <div className="bg-white p-5 grid rounded-2xl m-3 ">
        
        <div className="flex  justify-between items-center m-3">
            <div className="font-Nunito text-2xl font-bold "><span>QR Code</span></div>
            <div className="flex  justify-between items-center gap-3.5">
            <FileDownloadIcon/>
            <ShareIcon/>
            <RemoveRedEyeIcon/>
            <button className="flex sm:hidden" onClick={handelopen}><ExpandMoreIcon/></button>
            </div>
        </div>
        
        {open?
        <div>

<div className="flex items-center bg-orange-100 rounded-2xl p-2 m-3">
 <span>  <FileDownloadIcon/> Download the QR code or share it with your friends.</span>
</div>

<div className="border-8 border-orange-500 grid p-5 rounded-xl" >

 <div className="flex items-center justify-center p-3">
 <Image src={logo} alt="mazaady" className="w-60 "></Image>
 </div>

 <div className="font-Nunito text-2xl font-bold text-center"><span>Hala Ahmed</span></div>

 <div className="flex items-center justify-center p-3">
 <Image src={qr} alt="qr" className="w-60 "></Image>
 </div>

 <div className="text-sm	font-normal	text-center"><span>Follow Us on Mazaady</span></div>
 
</div>

        </div>
        :
        <></>
        }
        
       
    </div>
    
   
    </>

)
 }

 export default QRCard