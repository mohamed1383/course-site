import React from 'react';
import { FaClock, FaBook, FaUsers } from 'react-icons/fa';

interface CourseStatsProps {
  theme: string;
}

export default function CourseStats({ theme }: CourseStatsProps) {
  const stats = [
    { icon: <FaClock />, text: "12 ساعت" },
    { icon: <FaBook />, text: "24 درس" },
    { icon: <FaUsers />, text: "مبتدی" }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((item, index) => (
        <div key={index} className={`backdrop-blur-sm rounded-xl p-4 text-center border
          ${theme === "dark" 
            ? "bg-[#0066a3]/10 border-[#0099b3]/20" 
            : "bg-[#3a2b6d]/5 border-[#3a2b6d]/10"}`}>
          <div className={`mx-auto mb-2 ${theme === "dark" ? "text-[#00c0e4]" : "text-[#3a2b6d]/80"}`}>
            {item.icon}
          </div>
          <p className={theme === "dark" 
            ? "text-[#3a2b6d] dark:text-[#00c0e4]" 
            : "text-[#3a2b6d]/80"}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
} 