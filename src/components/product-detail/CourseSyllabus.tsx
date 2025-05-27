import React from 'react';

interface CourseSyllabusProps {
  theme: string;
}

export default function CourseSyllabus({ theme }: CourseSyllabusProps) {
  return (
    <div className={`mt-12 backdrop-blur-lg rounded-3xl p-8 shadow-xl border
      ${theme === "dark" 
        ? "bg-white/5 border-[#00c0e4]/10" 
        : "bg-white/60 border-[#3a2b6d]/5"}`}>
      <h2 className={`text-2xl font-bold text-right mb-6
        ${theme === "dark" 
          ? "text-[#3a2b6d] dark:text-[#00c0e4]/90" 
          : "text-[#3a2b6d]/90"}`}>
        سرفصل‌های دوره
      </h2>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className={`backdrop-blur-sm rounded-xl p-4 flex items-center justify-between group transition-colors duration-300 border
            ${theme === "dark" 
              ? "bg-[#0066a3]/5 hover:bg-[#0066a3]/10 border-[#0099b3]/10" 
              : "bg-[#3a2b6d]/3 hover:bg-[#3a2b6d]/5 border-[#3a2b6d]/5"}`}>
            <span className={theme === "dark" 
              ? "text-[#3a2b6d]/90 dark:text-[#00c0e4]/80" 
              : "text-[#3a2b6d]/70"}>
              فصل {item}
            </span>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className={theme === "dark" 
                ? "text-[#3a2b6d]/50 dark:text-[#00c0e4]/50" 
                : "text-[#3a2b6d]/40"}>
                6 درس
              </span>
              <span className={theme === "dark" 
                ? "text-[#3a2b6d]/50 dark:text-[#00c0e4]/50" 
                : "text-[#3a2b6d]/40"}>
                2 ساعت
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 