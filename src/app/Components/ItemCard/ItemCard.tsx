"use client"
import React, { useState } from "react";
import Image from "next/image";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import p1 from './producat/p1.jpg'

const ItemCard=()=>{

    const[love,setlove]=useState(false)
    const[love1,setlove1]=useState(false)
    const[love2,setlove2]=useState(false)
   
    const handellove=()=>{
        
        setlove(event=>!event)

    }

    const handellove1=()=>{
        
        setlove1(event=>!event)

    }

    const handellove2=()=>{
        
        setlove2(event=>!event)

    }

  
return(

    <div className="bg-white p-5 grid rounded-2xl m-3 h-full">

        <div className="grid ">

             <div className="flex justify-around items-center ">

<div className="flex gap-3.5">
  <button className="font-bold text-sm border-solid border-2 border-gray-600 text-gray-600 rounded-xl p-1  ">Products</button>
  <button className="font-bold text-sm border-solid border-2 border-gray-600 text-gray-600 rounded-xl p-1  ">Articles</button>
  <button className="font-bold text-sm border-solid border-2 border-gray-600 text-gray-600 rounded-xl p-1  ">Reviews</button>
</div>

  <div className="flex gap-3.5">
   <button className="bg-gradient-to-r from-red-500 to-orange-700 p-3 rounded-xl  cursor-pointer font-nunito text-white font-black"><AddCircleOutlineOutlinedIcon/> Add New Producat</button>
  </div>
 
             </div>

              <div className="flex p-5 m-3">
  <span className="font-extrabold text-3xl">Producats </span><span className="text-sm font-normal text-gray-600">(12)</span>
              </div>
        </div>

    
        <div className="flex items-center justify-around ">

            <div>
                <Image src={p1} alt="pro" className="w-20 h-20 rounded-3xl "></Image>
            </div>

            <div className="grid p-5 m-3">
                <div className="font-normal	text-lg	p-2"><span>Six-piece clothing set blouse - pants - hat and ...</span></div>
                <div className="p-2"><span className="text-gray-600	text-2xl">starting price </span><span className="font-bold	text-2xl">1000 EGP</span></div>
                <div className="p-2"><span className="font-normal text-lg">Lot starts in</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">2 Days</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">10 Hours</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">50 Minutes</span> </div>
            </div>

            <div>
                <button onClick={handellove}>{love?<FavoriteIcon/>:<FavoriteBorderIcon/>}</button>
            </div>

        </div>

        <div className="flex items-center justify-around ">

            <div>
                <Image src={p1} alt="pro" className="w-20 h-20 rounded-3xl "></Image>
            </div>

            <div className="grid p-5 m-3">
                <div className="font-normal	text-lg	p-2"><span>Six-piece clothing set blouse - pants - hat and ...</span></div>
                <div className="p-2"><span className="text-gray-600	text-2xl">starting price </span><span className="font-bold	text-2xl">1000 EGP</span></div>
                <div className="p-2"><span className="font-normal text-lg">Lot starts in</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">2 Days</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">10 Hours</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">50 Minutes</span> </div>
            </div>

            <div>
                <button onClick={handellove1}>{love1?<FavoriteIcon/>:<FavoriteBorderIcon/>}</button>
            </div>

        </div>


        <div className="flex items-center justify-around ">

            <div>
                <Image src={p1} alt="pro" className="w-20 h-20 rounded-3xl "></Image>
            </div>

            <div className="grid p-5 m-3">
                <div className="font-normal	text-lg	p-2"><span>Six-piece clothing set blouse - pants - hat and ...</span></div>
                <div className="p-2"><span className="text-gray-600	text-2xl">starting price </span><span className="font-bold	text-2xl">1000 EGP</span></div>
                <div className="p-2"><span className="font-normal text-lg">Lot starts in</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">2 Days</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">10 Hours</span> <span className="text-orange-300 font-nunito bg-orange-100 rounded-2xl p-2">50 Minutes</span> </div>
            </div>

            <div>
                <button onClick={handellove2}>{love2?<FavoriteIcon/>:<FavoriteBorderIcon/>}</button>
            </div>

        </div>

      

       

    </div>
)
}
export default ItemCard