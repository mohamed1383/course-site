import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { LuMenu } from "react-icons/lu";

export default function Navbar() {

  let courses = [{
    subject: "فرانت اند",
    courses: ['اموزش html و css', 'اموزش جاوا اسکریپت', 'اموزش react js', 'اموزش next js', 'tailwind css']
  },
  {
    subject: "بک اند",
    courses: ['اموزش node js', 'اموزش php', 'اموزش nest js', 'اموزش experes js']
  },
  ]

  const size1 = useMediaQuery({ query: "(max-width: 1100px)" })
  const [isSize1, setIsMobile] = useState(false)

  useEffect(() => {
    size1 ? setIsMobile(true) : setIsMobile(false)
  }, [window.innerWidth])

  return (
    <>
      <LuMenu className={`${isSize1 ? '' : "hidden"} w-[35px] h-[35px] cursor-pointer`}></LuMenu>

      <ul style={{
        display: `${isSize1 ? "none" : "flex"}`, gap: "50px", listStyleType: "none",
        fontFamily: "iran-yekan", flexDirection: "row-reverse", marginRight: "25px"
      }}>

        <li style={{ cursor: "pointer", fontSize: "20px", }}>logo</li>
        <li style={{ cursor: "pointer", fontSize: "20px" }}>خانه</li>
        <li className="relative text-lg">
          <div className="group inline-block cursor-pointer">
            دوره های آموزشی

            <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-[180px] bg-[#9c27b0] absolute top-[165%] right-[-10%] z-50 p-0">
              {courses.map((item, index) => (
                <li key={index} className="relative group/submenu">
                  <div className="px-4 py-2 text-white text-right hover:bg-[#6A1B9A] hover:text-yellow-300 border-b border-white/20 cursor-pointer">
                    {item.subject}
                  </div>


                  <ul className="invisible group-hover/submenu:visible opacity-0 group-hover/submenu:opacity-100 transition-all duration-300 w-[180px] bg-[#6A1B9A] absolute right-full top-0 z-50">
                    {item.courses.map((course, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 text-white text-right hover:bg-[#4A0072] hover:text-yellow-300 border-b border-white/20 last:border-none cursor-pointer"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </li>


        <li style={{ cursor: "pointer", fontSize: "20px" }}>تماس با ما</li>
      </ul>
    </>
  )
}

// #9c27b0 #6A1B9A
