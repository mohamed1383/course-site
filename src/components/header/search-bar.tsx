import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';


export default function SearchBar() {

  const [isSize2,setIsSize2] = useState(false)
  const size2 = useMediaQuery({ query: "(max-width: 675px)" })

  useEffect(() => {
    size2 ? setIsSize2(true) : setIsSize2(false)

  },[window.innerWidth])

  return (
    <div className={`relative flex ${isSize2 ? 'w-[250px]' : "w-[400px]"} h-[35px]`}>
      <input type="text" className='w-full h-full rounded-[50px] outline-none border-[1px]
       border-white pl-[35px] transition-all duration-300 focus-within:bg-white focus-within:text-[#6a1b9a] peer '/>

      <IoIosSearch className='absolute top-[25%] left-3 text-[inherit] 
      peer-focus:text-[#6a1b9a] z-10 cursor-pointer'></IoIosSearch>

    </div>
  )
}
