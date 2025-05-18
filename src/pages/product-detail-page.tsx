import React from 'react'
import { myContex } from "../app.jsx";
import { useContext } from 'react';

export default function ProductDetailPage() {

  const theme = useContext(myContex)[0]

  return (
    <div style={{backgroundImage: theme == "dark" ? "linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)" : 'linear-gradient(178.1deg, #f0f4ff 8.5%, #e6e9ff 82.4%)'}} className='w-full h-[100vh]'>
      <div className="">
        <div className="">
            <h1></h1>
            <p></p>
            <div className="">
                <button></button>
                <p></p>
            </div>
        </div>
        <div className="">
            <img src="" alt="" />
        </div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  )
}
