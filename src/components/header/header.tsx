import React, { useContext, useEffect, useState } from 'react'
import Navbar from './navbar'
import Button from './button'
import SearchBar from './search-bar'
import { useMediaQuery } from 'react-responsive'
import { CiLogin, CiUser } from "react-icons/ci"
import { GoSun } from "react-icons/go"
import { IoMoonOutline } from "react-icons/io5"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { isLogin } from '../../data/global/isLogin'
import { myContex } from '../../app.jsx'
import { Link } from 'react-router-dom'

export default function Header() {
  const [pageTheme, changeTheme] = useContext(myContex)


  const Size2 = useMediaQuery({ query: "(max-width: 500px)" },{noSsr: true})
  const [isSize2,setIsSize2] = useState(false)

  useEffect(() => {
    setIsSize2(Size2)
  },[window.innerWidth])

  const themeIcon = pageTheme === "light" ? GoSun : IoMoonOutline
  const userIcon = isLogin ? CiUser : CiLogin
  const buttons = [userIcon, AiOutlineShoppingCart, themeIcon]


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around" ,
        gap: "25px" ,
        alignItems: "center",
        height: "70px",
        padding: "0 15px",
        backgroundColor: pageTheme === "light" ? "rgb(142, 36, 170)" : "rgb(156, 39, 176)",
        color: "white",
      }}
    >
      <Navbar />
      <div className="flex items-center flex-row-reverse gap-4 sm:gap-10">
        <SearchBar />
        <div className="flex gap-3 sm:gap-7">
          {buttons.map((IconComponent, index) => {

            const clickHandler = index === 2 ? changeTheme : () => {}
            if (index === 0) {
              return (
                <Link to={!isLogin ? "/login-page" : "/user-info"} key={index}>
                  <Button Icon={IconComponent} clickHandler={clickHandler} />
                </Link>
              )
            }
            return <Link to='/shoping-cart'><Button Icon={IconComponent} key={index} clickHandler={clickHandler} /></Link>
          })}
        </div>
      </div>
    </div>
  )
}
