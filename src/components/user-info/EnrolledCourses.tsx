import React, { useContext } from 'react';
import { myContex } from "../../app.jsx";
import { FaGraduationCap, FaStar } from 'react-icons/fa';

interface Course {
  title: string;
  progress: number;
  image: string;
  instructor: string;
  rating: number;
  lastAccess: string;
}

interface EnrolledCoursesProps {
  courses: Course[];
}

export default function EnrolledCourses({ courses }: EnrolledCoursesProps) {
  const theme = useContext(myContex)[0];

  return (
    <div className={`rounded-3xl p-8 mb-12 shadow-2xl backdrop-blur-sm
      ${theme === "dark" 
        ? "bg-[#4a3b7d]/80 border border-[#00c0e4]/20" 
        : "bg-white/90 border border-[#3a2b6d]/10"}`}>
      <h2 className={`text-3xl font-bold mb-8 flex items-center gap-4
        ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
        <div className={`p-3 rounded-xl
          ${theme === "dark" 
            ? "bg-[#00c0e4]/10 text-[#00c0e4]" 
            : "bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
          <FaGraduationCap className="text-2xl" />
        </div>
        دوره‌های در حال یادگیری
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className={`rounded-2xl overflow-hidden
            ${theme === "dark" 
              ? "bg-[#4a3b7d]/40 border border-[#00c0e4]/20" 
              : "bg-[#3a2b6d]/5 border border-[#3a2b6d]/10"}`}>
            <div className="aspect-video">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3
                ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
                {course.title}
              </h3>
              <p className={`text-base mb-4
                ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
                {course.instructor}
              </p>
              <div className="flex items-center justify-between mb-4">
                <p className={`text-sm
                  ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
                  آخرین دسترسی: {course.lastAccess}
                </p>
                <div className="flex items-center gap-2">
                  <FaStar className={`text-xl ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`} />
                  <span className={`text-base font-medium
                    ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
                    {course.rating}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className={`h-3 rounded-full
                    ${theme === "dark" ? "bg-[#00c0e4]" : "bg-[#3a2b6d]"}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className={`text-sm text-right
                ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
                {course.progress}% تکمیل شده
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 