import React, { useContext } from 'react';
import { myContex } from '../../app';
import { FaGraduationCap, FaArrowLeft, FaPlay } from 'react-icons/fa';
import sectionImage from '../../data/images/section-image.png';

const HeroSection = () => {
  const them = useContext(myContex);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${them[0] === "dark" 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50'}`} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-8 mt-16 shadow-sm">
              <FaGraduationCap className="text-lg" />
              <span className="text-sm font-medium">پلتفرم آموزشی پیشرو</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-8 leading-tight ${them[0] === "dark" ? 'text-white' : 'text-gray-900'}`}
            style={{
              fontFamily: "iran-yekan"
            }}>
              یادگیری آنلاین با
              <span className="text-blue-600 block mt-3">بهترین اساتید</span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-10 leading-relaxed ${them[0] === "dark" ? 'text-gray-300' : 'text-gray-600'}`}>
              دوره‌های آموزشی با کیفیت برای یادگیری مهارت‌های جدید و پیشرفت در مسیر شغلی
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-end">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl">
                شروع یادگیری
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className={`px-8 py-4 border-2 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                them[0] === "dark" 
                  ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}>
                مشاهده دوره‌ها
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 mb-16 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${them[0] === "dark" ? 'text-white' : 'text-gray-900'}`}>۱۰۰+</div>
                <div className={`text-sm ${them[0] === "dark" ? 'text-gray-400' : 'text-gray-600'}`}>دوره آموزشی</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${them[0] === "dark" ? 'text-white' : 'text-gray-900'}`}>۵۰+</div>
                <div className={`text-sm ${them[0] === "dark" ? 'text-gray-400' : 'text-gray-600'}`}>استاد برجسته</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${them[0] === "dark" ? 'text-white' : 'text-gray-900'}`}>۱۰۰۰+</div>
                <div className={`text-sm ${them[0] === "dark" ? 'text-gray-400' : 'text-gray-600'}`}>دانش‌آموز</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden lg:block">
            <div className={`relative ${them[0] === "dark" ? 'bg-gray-800/50' : 'bg-white/50'} p-8 rounded-3xl backdrop-blur-sm shadow-2xl`}>
              <img 
                src={sectionImage}
                alt="Online Learning" 
                className="w-full h-[500px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 