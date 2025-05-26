import React from 'react'
import { myContex } from "../app.jsx";
import { useContext } from 'react';

export default function ProductDetailPage({courseTitle,imagePath,price,description} : {courseTitle: string,imagePath: string,price: number,description: string}) {

  const theme = useContext(myContex)[0]

  return (
    <div style={{backgroundImage: theme == "dark" ? "linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)" : 'linear-gradient(178.1deg, #f0f4ff 8.5%, #e6e9ff 82.4%)'}} className='w-full h-[100vh]'>
      <div className="w-[80%] h-auto mr-auto ml-auto flex">
        <div className="W-[60%]">
            <h1>تایتل دوره</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in soluta natus quibusdam. Placeat perferendis nisi fugit vero assumenda quia porro soluta id! Aspernatur perspiciatis tempore ratione explicabo at modi repudiandae ullam nihil ducimus rem.</p>
            <div className="">
                <button>افزودن به سبد خرید</button>
                <p></p>
            </div>
        </div>
        <div className="">
            <img src="../data/image/image.png" alt="" />
        </div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  )
}
