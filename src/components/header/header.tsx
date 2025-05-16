import React, { useEffect } from 'react'
import Navbar from './navbar'
import Button from './button'
import SearchBar from './search-bar'
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {pageTheme} from '../../data/global/Theme.jsx'
import { isLogin } from '../../data/global/isLogin';


let theme = pageTheme == "light" ? GoSun : IoMoonOutline

let userIcon = isLogin ? CiUser : CiLogin

let buttons = [userIcon, AiOutlineShoppingCart,theme]

export default function Header() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: 'space-between',
      alignItems: "center",
      height: "70px",
      padding: "0 25px",
      backgroundColor: "rgb(156, 39, 176)",
      color: "white"
    }}>
      <Navbar></Navbar>
      <div className='flex items-center flex-row-reverse gap-10'>
        <SearchBar></SearchBar>
        <div className='flex gap-7'>
          {buttons.map((item, index) => {
            return <Button Icon={item} index={index} key={index}></Button>
          })}
        </div>
      </div>
    </div>
  )
}
