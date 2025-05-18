import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import { myContex } from '../../app.jsx'


export default function SignIn() {
    const [inputValue,setInputValue] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [isEmpty,setIsEmpty] = useState({
        userName: false,
        email: false,
        password: false
    })

    let [submited,setSubmited] = useState(false)

    const inputValueHandler = () => {
        const values = inputValue

        setIsEmpty({
            userName: values.userName?.trim() == '' ? true : false ,
            email: values.email?.trim() == '' ? true : false,
            password: values.password?.trim() == '' ? true : false
        })
    }

    const submitHandler = () => {
        inputValueHandler()
        setSubmited(true)
    } 

    useEffect(() => {
        inputValueHandler()
    },[inputValue.userName,inputValue.email,inputValue.password])

    const theme = useContext(myContex)

    return (
        <div style={{ backgroundImage: theme[0] == "dark" ? "linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)" : 'linear-gradient(178.1deg, #f0f4ff 8.5%, #e6e9ff 82.4%)' }}
            className={`w-full h-[100vh] flex justify-center items-center`}>

            <div className="w-[50%] h-[600px] flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-[20px] pt-4 gap-[20px] shadow-xl">
                <h1 className='text-[40px] mb-[30px] font-bold text-gray-800'>Sign In</h1>
                <input
                    className='w-[60%] h-[45px] px-4 rounded-lg border-2 border-purple-300 bg-purple-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 placeholder-purple-300'
                    type="email"
                    placeholder="user name"
                    value={inputValue.userName}
                    onChange={(e) => {
                        setInputValue(prev =>  ({...prev,userName: e.target.value}))
                        // setSubmited(true)
                    }}
                />
                {submited && isEmpty.userName && <p className="text-red-500 text-sm mr-2">لطفا نام کاربری خود را وارد کنید</p>}

                <input
                    className='w-[60%] h-[45px] px-4 rounded-lg border-2 border-purple-300 bg-purple-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 placeholder-purple-300'
                    type="email"
                    placeholder="Email address"
                    value={inputValue.email}
                    onChange={(e) => {
                        setInputValue(prev =>  ({...prev,email: e.target.value}))
                        // setSubmited(true)
                    }}
                />
                {submited && isEmpty.email && <p className="text-red-500 text-sm mr-2">لطفا ایمیل خود را وارد کنید</p>}
                <input
                    className='w-[60%] h-[45px] px-4 rounded-lg border-2 border-purple-300 bg-purple-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 placeholder-purple-300'
                    type="password"
                    placeholder="Password"
                    value={inputValue.password}
                    onChange={(e) => {
                        setInputValue(prev =>  ({...prev,password: e.target.value}))
                        // setSubmited(true)
                    }}
                />
                {submited && isEmpty.password && <p className="text-red-500 text-sm mr-2">لطفا رمز عبور خود را وارد کنید</p>}

                <button
                    className='w-[60%] h-[45px] bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium active:scale-95 active:shadow-lg shadow-md'
                    onClick={() => submitHandler()}
                >
                    Sign In
                </button>
                <Link to='/login' className='text-purple-600 hover:text-purple-700 transition-colors duration-200'>
                    <p className='text-sm'>Already have an account? login</p>
                </Link>
            </div>
        </div>

    )
}
