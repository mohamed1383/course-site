import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface CourseSyllabusProps {
  theme: string;
}

export default function CourseSyllabus({ theme }: CourseSyllabusProps) {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionId: number) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className={`mt-12 backdrop-blur-lg rounded-3xl p-8 shadow-xl border
      ${theme === "dark" 
        ? "bg-white/10 border-[#00c0e4]/20" 
        : "bg-white/80 border-[#3a2b6d]/10"}`}>
      <h2 className={`text-2xl font-bold text-right mb-6
        ${theme === "dark" 
          ? "text-[#3a2b6d] dark:text-[#00c0e4]" 
          : "text-[#3a2b6d]"}`}>
        سرفصل‌های دوره
      </h2>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className={`backdrop-blur-sm rounded-xl overflow-hidden border
            ${theme === "dark" 
              ? "bg-[#0066a3]/10 border-[#0099b3]/20" 
              : "bg-[#3a2b6d]/5 border-[#3a2b6d]/10"}`}>
            <button
              onClick={() => toggleSection(item)}
              className={`cursor-pointer w-full p-4 flex items-center justify-between group transition-all duration-300
                ${theme === "dark" 
                  ? "hover:bg-[#0066a3]/20" 
                  : "hover:bg-[#3a2b6d]/10"}`}>
              <div className="flex items-center gap-3">
                <span className={theme === "dark" 
                  ? "text-[#3a2b6d] dark:text-[#00c0e4]" 
                  : "text-[#3a2b6d]/80"}>
                  فصل {item}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full
                  ${theme === "dark" 
                    ? "bg-[#00c0e4]/20 text-[#00c0e4]" 
                    : "bg-[#3a2b6d]/10 text-[#3a2b6d]/80"}`}>
                  6 درس
                </span>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className={theme === "dark" 
                  ? "text-[#3a2b6d]/60 dark:text-[#00c0e4]/60" 
                  : "text-[#3a2b6d]/50"}>
                  2 ساعت
                </span>
                <FaChevronDown
                  className={`transition-all duration-300 ${
                    openSection === item ? 'transform rotate-180' : ''
                  } ${theme === "dark" 
                    ? "text-[#00c0e4]" 
                    : "text-[#3a2b6d]/60"}`}
                />
              </div>
            </button>
            
            <div className={`grid transition-all duration-300 ease-in-out
              ${openSection === item ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={` space-y-2 border-t
                  ${theme === "dark" 
                    ? "border-[#0099b3]/20 bg-[#0066a3]/10" 
                    : "border-[#3a2b6d]/10 bg-[#3a2b6d]/5"}`}>
                  {[1, 2, 3, 4, 5, 6].map((lesson) => (
                    <div
                      key={lesson}
                      className={`box-border px-4 py-3 mb-0 cursor-pointer flex items-center justify-between  border-b last:border-0 group/lesson
                        ${theme === "dark" 
                          ? "border-[#0099b3]/20 hover:bg-[#0066a3]/20" 
                          : "border-[#3a2b6d]/10 hover:bg-[#3a2b6d]/10"}`}>
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs
                          ${theme === "dark" 
                            ? "bg-[#00c0e4]/20 text-[#00c0e4]" 
                            : "bg-[#3a2b6d]/10 text-[#3a2b6d]/80"}`}>
                          {lesson}
                        </span>
                        <span className={theme === "dark" 
                          ? "text-[#3a2b6d] dark:text-[#00c0e4]" 
                          : "text-[#3a2b6d]/80"}>
                          درس {lesson}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full
                          ${theme === "dark" 
                            ? "bg-[#00c0e4]/20 text-[#00c0e4]" 
                            : "bg-[#3a2b6d]/10 text-[#3a2b6d]/80"}`}>
                          رایگان
                        </span>
                        <span className={theme === "dark" 
                          ? "text-[#3a2b6d]/60 dark:text-[#00c0e4]/60" 
                          : "text-[#3a2b6d]/50"}>
                          20 دقیقه
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 