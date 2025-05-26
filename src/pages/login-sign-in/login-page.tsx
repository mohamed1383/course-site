import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { MdHome } from "react-icons/md";

export default function LoginPageWrapper() {
    let path = useLocation()
    let navigate = useNavigate()

    return path.pathname === '/login-page' ? (
        <div className='w-full h-[100vh] relative flex items-center justify-center font-byekan' 
             style={{ backgroundImage: 'linear-gradient(178.1deg, #3A59D1 8.5%, #3D90D7 82.4%)' }}>
            <div className="w-[90%] max-w-[500px] h-auto min-h-[500px] rounded-[20px] backdrop-blur-xl bg-[#7AC6D2]/10 border border-[#B5FCCD]/20 shadow-2xl p-8">
                <div className="w-full flex flex-col items-center gap-8">
                    {/* Home Button */}
                    <button 
                        onClick={() => navigate('/')}
                        className="self-start cursor-pointer flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                        <MdHome className="w-5 h-5" />
                        <span>بازگشت به صفحه اصلی</span>
                    </button>
     
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white mb-2">خوش آمدید</h1>
                        <p className="text-white/70">لطفاً برای ادامه یکی از روش‌های زیر را انتخاب کنید</p>
                    </div>

                    <button className="w-full flex cursor-pointer items-center justify-center gap-3 px-6 py-3.5 border border-[#B5FCCD]/20 rounded-lg hover:bg-[#B5FCCD]/10 transition-all duration-300 bg-[#7AC6D2]/5 backdrop-blur-sm">
                        <FcGoogle className='bg-white w-6 h-6 rounded-full p-0.5' />
                        <span className="text-white font-medium">ثبت نام با گوگل</span>
                    </button>

                    <div className="w-full flex items-center gap-4">
                        <div className="flex-1 h-[1px] bg-[#B5FCCD]/20"></div>
                        <span className="text-white/70 text-sm">یا</span>
                        <div className="flex-1 h-[1px] bg-[#B5FCCD]/20"></div>
                    </div>

                    <div className="w-full space-y-4">
                        <button 
                            onClick={() => {navigate('email-login')}} 
                            className="w-full cursor-pointer flex items-center justify-center gap-3 px-6 py-3.5 border border-[#B5FCCD]/20 rounded-lg hover:bg-[#B5FCCD]/10 transition-all duration-300 bg-[#7AC6D2]/5 backdrop-blur-sm group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-white font-medium">ورود با ایمیل</span>
                        </button>
                        <button 
                            onClick={() => {navigate('phone-login')}}
                            className="w-full cursor-pointer flex items-center justify-center gap-3 px-6 py-3.5 border border-[#B5FCCD]/20 rounded-lg hover:bg-[#B5FCCD]/10 transition-all duration-300 bg-[#7AC6D2]/5 backdrop-blur-sm group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-white font-medium">ورود با شماره موبایل</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : <Outlet />
}
