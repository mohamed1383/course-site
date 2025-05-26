import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBack } from "react-icons/md";

export default function EmailSignIn() {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <div className='w-full h-[100vh] relative flex items-center justify-center font-byekan'
            style={{ backgroundImage: 'linear-gradient(178.1deg, #3A59D1 8.5%, #3D90D7 82.4%)' }}>
            <div className="w-[90%] max-w-[500px] h-auto min-h-[500px] rounded-[20px] backdrop-blur-xl bg-[#7AC6D2]/10 border border-[#B5FCCD]/20 shadow-2xl p-8">
                <div className="w-full flex flex-col items-center gap-8">
                    <button
                        onClick={() => navigate('/login-page')}
                        className="self-start cursor-pointer flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                        <MdOutlineArrowBack className="w-5 h-5" />
                        <span>بازگشت</span>
                    </button>

                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white mb-2">ثبت نام با ایمیل</h1>
                        <p className="text-white/70">لطفا اطلاعات خود را وارد کنید</p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="space-y-2">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="نام و نام خانوادگی"
                                dir='rtl'
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#7AC6D2]/5 border border-[#B5FCCD]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B5FCCD]/40 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ایمیل"
                                dir='rtl'
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#7AC6D2]/5 border border-[#B5FCCD]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B5FCCD]/40 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="رمز عبور"
                                dir='rtl'
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#7AC6D2]/5 border border-[#B5FCCD]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B5FCCD]/40 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="تکرار رمز عبور"
                                dir='rtl'
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#7AC6D2]/5 border border-[#B5FCCD]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B5FCCD]/40 transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-lg bg-[#B5FCCD]/20 text-white font-medium hover:bg-[#B5FCCD]/30 transition-colors"
                        >
                            ثبت نام
                        </button>
                    </form>

                    <p className="text-white/70">
                        قبلا ثبت نام کرده‌اید؟{' '}
                        <a onClick={() => navigate('/login-page/email-login')} className="text-[#B5FCCD] hover:text-[#B5FCCD]/80 transition-colors cursor-pointer">
                            ورود
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
