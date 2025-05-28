import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden text-gray-200">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-[rgba(224,223,223,0.08)] backdrop-blur-[30px] border border-[rgba(224,223,223,0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]" />

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">درباره ما</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              ما متعهد به ارائه بهترین خدمات آموزشی با کیفیت بالا هستیم.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">دسترسی سریع</h3>
            <ul className="space-y-4">
              {[
                { href: '/', text: 'صفحه اصلی' },
                { href: '/courses', text: 'دوره‌ها' },
                { href: '/about', text: 'درباره ما' },
                { href: '/contact', text: 'تماس با ما' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-gray-200 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">تماس با ما</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">آدرس:</span>
                <span className="text-gray-200">تهران، خیابان ولیعصر</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">تلفن:</span>
                <span className="text-gray-200">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse group">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">ایمیل:</span>
                <span className="text-gray-200">info@example.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-6 rtl:space-x-reverse">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-200 hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
