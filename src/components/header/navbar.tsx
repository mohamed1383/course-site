import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useEffect,useState } from 'react';
import { LuMenu } from "react-icons/lu";

export default function Navbar() {

  const size1 = useMediaQuery({query: "(max-width: 1100px)"})
  const [isSize1,setIsMobile] = useState(false)

  useEffect(() => {
    size1 ? setIsMobile(true) : setIsMobile(false)
  },[window.innerWidth])

  return (
    <>
      <LuMenu className={`${isSize1 ? '' : "hidden"} w-[35px] h-[35px] cursor-pointer`}></LuMenu>

      <ul style={{display: `${isSize1 ? "none" : "flex"}` , gap: "50px" , listStyleType: "none" , 
        fontFamily: "iran-yekan" , flexDirection: "row-reverse" , marginRight: "25px"}}>

        <li style={{cursor: "pointer" , fontSize: "20px",}}>logo</li>
        <li style={{cursor: "pointer" , fontSize: "20px"}}>خانه</li>
        <li style={{cursor: "pointer" , fontSize: "20px"}}>دوره های اموزشی</li>
        <li style={{cursor: "pointer" , fontSize: "20px"}}>تماس با ما</li>
      </ul>
    </>
  )
}
