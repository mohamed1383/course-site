import React,{useState,useEffect} from 'react'
import Navbar from './navbar'
import Button from './button'
import SearchBar from './search-bar'
import { useMediaQuery } from 'react-responsive';
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
  const [isSize2, setIsSize2] = useState(false)
  const size2 = useMediaQuery({ query: "(max-width: 500px)" })

   useEffect(() => {
      size2 ? setIsSize2(true) : setIsSize2(false)
  
    },[window.innerWidth])

  return (
    <div style={{
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: isSize2 ? 'flex-start' : 'space-between',
      gap: isSize2 ? '25px' : '0',
      alignItems: "center",
      height: "70px",
      padding: "0 15px",
      backgroundColor: pageTheme === "light" ? "rgb(142, 36, 170)" : "rgb(156, 39, 176)",
      color: "white"
    }}>
      <Navbar></Navbar>
      <div className='flex items-center flex-row-reverse gap-4 sm:gap-10'>
        <SearchBar></SearchBar>
        <div className='flex gap-3 sm:gap-7'>
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

