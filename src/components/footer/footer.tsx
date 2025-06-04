import React, { useContext } from 'react';
import { myContex } from '../../app';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

  const them = useContext(myContex)

  console.log(them)

  return (
    <footer className='relative mt-20 overflow-hidden'>
      <div className={`absolute inset-0 ${them[0] == "dark" ? 'bg-[rgba(224,223,223,0.08)]' :
         'bg-[linear-gradient(180deg,_#cfd6f0_0%,_#aeb9e1_100%)]'} backdrop-blur-[30px] border 
         border-[rgba(224,223,223,0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">درباره ما</h3>
            <p className={`${them[0] == "dark" ? 'text-gray-200' : 'text-gray-600'} leading-relaxed text-lg`}>
              ما متعهد به ارائه بهترین خدمات آموزشی با کیفیت بالا هستیم.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">دسترسی سریع</h3>
            <ul className="space-y-4">
              {[
                { href: '#', text: 'صفحه اصلی' },
                { href: '#', text: 'دوره‌ها' },
                { href: '#', text: 'درباره ما' },
                { href: '#', text: 'تماس با ما' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`${them[0] == "dark" ? 'text-gray-200' : 'text-gray-600'} hover:text-blue-400 transition-all duration-300 flex items-center group`}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">تماس با ما</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">آدرس:</span>
                <span className={`${them[0] == "dark" ? 'text-gray-200' : 'text-gray-600'}`}>تهران، خیابان ولیعصر</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">تلفن:</span>
                <span className={`${them[0] == "dark" ? 'text-gray-200' : 'text-gray-600'}`}>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">ایمیل:</span>
                <span className={`${them[0] == "dark" ? 'text-gray-200' : 'text-gray-600'}`}>info@example.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-6 rtl:space-x-reverse">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${them[0] == "dark" ? 'text-gray-200' : 'text-gray-600'} hover:text-blue-400 transition-transform duration-300 transform hover:scale-110`}
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className={`${them[0] == "dark" ? 'text-gray-300' : 'text-gray-500'} text-sm`}>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
