import React from 'react';
import { FaStar, FaRegStar, FaUsers } from 'react-icons/fa';

interface CourseInfoProps {
  courseTitle: string;
  description: string;
  theme: string;
}

export default function CourseInfo({ courseTitle, description, theme }: CourseInfoProps) {
  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold text-right
        ${theme === "dark" 
          ? "text-[#3a2b6d] dark:text-[#00c0e4]/90" 
          : "text-[#3a2b6d]/90"}`}>
        {courseTitle || "تایتل دوره"}
      </h1>
      
      <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <FaStar className={theme === "dark" ? "text-[#0066a3]" : "text-[#3a2b6d]/70"} />
          <FaStar className={theme === "dark" ? "text-[#0066a3]" : "text-[#3a2b6d]/70"} />
          <FaStar className={theme === "dark" ? "text-[#0066a3]" : "text-[#3a2b6d]/70"} />
          <FaStar className={theme === "dark" ? "text-[#0066a3]" : "text-[#3a2b6d]/70"} />
          <FaRegStar className={theme === "dark" ? "text-[#0066a3]" : "text-[#3a2b6d]/70"} />
          <span className={`mr-2 ${theme === "dark" 
            ? "text-[#3a2b6d]/90 dark:text-[#00c0e4]/80" 
            : "text-[#3a2b6d]/70"}`}>4.0</span>
        </div>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <FaUsers className={theme === "dark" ? "text-[#0099b3]" : "text-[#3a2b6d]/70"} />
          <span className={`mr-2 ${theme === "dark" 
            ? "text-[#3a2b6d]/90 dark:text-[#00c0e4]/80" 
            : "text-[#3a2b6d]/70"}`}>120 دانشجو</span>
        </div>
      </div>

      <p className={`text-right leading-relaxed
        ${theme === "dark" 
          ? "text-[#3a2b6d]/70 dark:text-[#00c0e4]/70" 
          : "text-[#3a2b6d]/60"}`}>
        {description || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in soluta natus quibusdam. Placeat perferendis nisi fugit vero assumenda quia porro soluta id! Aspernatur perspiciatis tempore ratione explicabo at modi repudiandae ullam nihil ducimus rem."}
      </p>
    </div>
  );
} 