import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20">
     
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/70 backdrop-blur-xl"></div>
      
     
      <div className="relative max-w-7xl mx-auto px-4 py-12 text-gray-200/50 text-blue-400/50 text-gray-300/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">درباره ما</h3>
            <p className="leading-relaxed">
              ما متعهد به ارائه بهترین خدمات آموزشی با کیفیت بالا هستیم.
            </p>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-xl font-bold">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400/50 transition duration-300">صفحه اصلی</a></li>
              <li><a href="/courses" className="hover:text-blue-400/50 transition duration-300">دوره‌ها</a></li>
              <li><a href="/about" className="hover:text-blue-400/50 transition duration-300">درباره ما</a></li>
              <li><a href="/contact" className="hover:text-blue-400/50 transition duration-300">تماس با ما</a></li>
            </ul>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-xl font-bold">تماس با ما</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="font-semibold">آدرس:</span>
                <span>تهران، خیابان ولیعصر</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="font-semibold">تلفن:</span>
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="font-semibold">ایمیل:</span>
                <span>info@example.com</span>
              </li>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h3 className="text-xl font-bold">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="hover:text-blue-400/50 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400/50 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400/50 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400/50 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-700/30 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
