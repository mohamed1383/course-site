import React from 'react'
import { myContex } from "../app.jsx";
import { useContext } from 'react';
import CourseImage from '../components/product-detail/CourseImage';
import CourseInfo from '../components/product-detail/CourseInfo';
import CourseStats from '../components/product-detail/CourseStats';
import CoursePrice from '../components/product-detail/CoursePrice';
import CourseSyllabus from '../components/product-detail/CourseSyllabus';

export default function ProductDetailPage({courseTitle,imagePath,price,description} : {courseTitle: string,imagePath: string,price: number,description: string}) {
  const theme = useContext(myContex)[0];

  return (
    <div style={{
      backgroundImage: theme == "dark" 
        ? "linear-gradient(178.1deg, #3a2b6d 8.5%, #1a1535 82.4%)" 
        : "linear-gradient(178.1deg, #f5f7ff 8.5%, #edf0ff 82.4%)"
    }} className='min-h-screen py-12'>
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className={`backdrop-blur-lg rounded-3xl p-8 shadow-xl border
          ${theme === "dark" 
            ? "bg-white/5 border-[#00c0e4]/10" 
            : "bg-white/60 border-[#3a2b6d]/5"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <CourseImage 
              imagePath={imagePath}
              courseTitle={courseTitle}
              theme={theme}
            />

            <div className="flex flex-col justify-between">
              <CourseInfo 
                courseTitle={courseTitle}
                description={description}
                theme={theme}
              />
              
              <CourseStats theme={theme} />
              
              <CoursePrice 
                price={price}
                theme={theme}
              />
            </div>
          </div>
        </div>

        <CourseSyllabus theme={theme} />
      </div>
    </div>
  )
}
