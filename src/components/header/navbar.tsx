import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

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

  const [mobileMenu, setMobileMenu] = useState(false)
  const size1 = useMediaQuery({ query: "(max-width: 1100px)" })
  const [isSize1, setIsMobile] = useState(false)

  useEffect(() => {
    size1 ? setIsMobile(true) : setIsMobile(false)
  }, [window.innerWidth])

  return (
    <>
      <LuMenu onClick={() => setMobileMenu(true)} className={`${isSize1 ? '' : "hidden"} w-[35px] h-[35px] cursor-pointer`}></LuMenu>

      <div
        className={`fixed top-0 right-0 w-[300px] h-[100vh] z-30 bg-[#6A1B9A] transform transition-transform duration-300 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <IoCloseOutline
          onClick={() => setMobileMenu(false)}
          className="absolute left-0 w-10 h-10 transition-all cursor-pointer hover:text-red-500 hover:scale-[1.1] hover:rotate-[15deg]"
        />

        <ul className="absolute right-[5%] top-[7%] space-y-5 text-white">
          <li className="group text-right flex items-center gap-3 justify-end cursor-pointer transition-colors duration-300 hover:text-yellow-300">
            خانه <IoHome className="text-xl transition-transform duration-300 group-hover:scale-110" />
          </li>
          <li className="group text-right flex items-center gap-3 justify-end cursor-pointer transition-colors duration-300 hover:text-yellow-300">
            دوره‌های آموزشی <FaLaptopCode className="text-xl transition-transform duration-300 group-hover:scale-110" />
          </li>
          <li className="group text-right flex items-center gap-3 justify-end cursor-pointer transition-colors duration-300 hover:text-yellow-300">
            تماس با ما <FaPhoneSquare className="text-xl transition-transform duration-300 group-hover:scale-110" />
          </li>
        </ul>
      </div>


      <div className={`${mobileMenu ? '' : 'hidden'} absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-[#00000085] z-20`}></div>

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
