import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContex as ThemeContext } from '../../app.jsx'

export default function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })
  const [isEmpty, setIsEmpty] = useState({
    email: false,
    password: false
  })
  const [submitted, setSubmitted] = useState(false)
  const theme = useContext(ThemeContext)

  const validate = () => {
    const { email, password } = inputValue
    setIsEmpty({
      email: email.trim() === '',
      password: password.trim() === ''
    })
  }

  const submitHandler = () => {
    validate()
    setSubmitted(true)
  }

  useEffect(() => {
    validate()
  }, [inputValue.email, inputValue.password])

  const backgroundStyle = {
    backgroundImage:
      theme[0] === 'dark'
        ? 'linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)'
        : 'linear-gradient(178.1deg, #f0f4ff 8.5%, #e6e9ff 82.4%)'
  }

  return (
    <div
      style={backgroundStyle}
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <div className="w-[50%] h-[500px] flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-[20px] pt-4 gap-[20px] shadow-xl">
        <h1 className="text-[40px] mb-[30px] font-bold text-gray-800">Login</h1>

        <input
          type="email"
          placeholder="Email address"
          value={inputValue.email}
          onChange={e =>
            setInputValue(prev => ({ ...prev, email: e.target.value }))
          }
          className="w-[60%] h-[45px] px-4 rounded-lg border-2 border-purple-300 bg-purple-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 placeholder-purple-300"
        />
        {submitted && isEmpty.email && (
          <p className="text-red-500 text-sm mr-2">
            لطفا ایمیل خود را وارد کنید
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={inputValue.password}
          onChange={e =>
            setInputValue(prev => ({ ...prev, password: e.target.value }))
          }
          className="w-[60%] h-[45px] px-4 rounded-lg border-2 border-purple-300 bg-purple-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 placeholder-purple-300"
        />
        {submitted && isEmpty.password && (
          <p className="text-red-500 text-sm mr-2">
            لطفا رمز عبور خود را وارد کنید
          </p>
        )}

        <button
          onClick={submitHandler}
          className="w-[60%] h-[45px] bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium active:scale-95 active:shadow-lg shadow-md"
        >
          Sign In
        </button>

        <Link
          to='/sign-in'
          className='text-purple-600 hover:text-purple-700 transition-colors duration-200'
        >
          <p className='text-sm'>Don't have an account? Sign up</p>
        </Link>
      </div>
    </div>
  )
}
