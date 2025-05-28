import React from 'react'
import Navbar from './navbar'
import Button from './button'
import SearchBar from './search-bar'
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { isLogin } from '../../data/global/isLogin';
import { myContex } from '../../app.jsx'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  const [pageTheme, changeTheme] = useContext(myContex)


  let theme = pageTheme === "light" ? GoSun : IoMoonOutline
  let userIcon = isLogin ? CiUser : CiLogin
  let buttons = [userIcon, AiOutlineShoppingCart, theme]

  return (
    <div style={{
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: 'space-between',
      alignItems: "center",
      height: "70px",
      padding: "0 25px",
      backgroundColor: pageTheme === "light" ? "rgb(142, 36, 170)" : "rgb(156, 39, 176)",
      color: "white"
    }}>
      <Navbar></Navbar>
      <div className='flex items-center flex-row-reverse gap-10'>
        <SearchBar></SearchBar>
        <div className='flex gap-7'>
          {buttons.map((item, index) => {
            return index != 0 ? <Button
              Icon={item}
              key={index}
              clickHandler={index === 2 ? changeTheme : () => { }}
            /> : <Link to={!isLogin ? 'login-page' : 'user-info'}>
              <Button
                Icon={item}
                key={index}
                clickHandler={index === 2 ? changeTheme : () => { }}
              ></Button>
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}

