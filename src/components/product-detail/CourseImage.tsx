import React from 'react';

interface CourseImageProps {
  imagePath: string;
  courseTitle: string;
  theme: string;
}

export default function CourseImage({ imagePath, courseTitle, theme }: CourseImageProps) {
  return (
    <div className="relative group">
      <img 
        src={imagePath || "../data/image/image.png"} 
        alt={courseTitle} 
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
      />
      <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl
        ${theme === "dark" 
          ? "from-[#3a2b6d]/60 to-transparent" 
          : "from-[#3a2b6d]/10 to-transparent"}`}>
      </div>
    </div>
  );
} 