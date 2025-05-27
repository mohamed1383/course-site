import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/70 backdrop-blur-xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">درباره ما</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              ما متعهد به ارائه بهترین خدمات آموزشی با کیفیت بالا هستیم.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">دسترسی سریع</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-200 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-200 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  دوره‌ها
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-200 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  درباره ما
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-200 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">تماس با ما</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">آدرس:</span>
                <span className="text-gray-200">تهران، خیابان ولیعصر</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">تلفن:</span>
                <span className="text-gray-200">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">ایمیل:</span>
                <span className="text-gray-200">info@example.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a href="#" className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={28} />
              </a>
              <a href="#" className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={28} />
              </a>
              <a href="#" className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={28} />
              </a>
              <a href="#" className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/30 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-lg">© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
