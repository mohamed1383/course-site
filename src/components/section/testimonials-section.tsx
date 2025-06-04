import React, { useContext } from 'react';
import { myContex } from '../../app';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const them = useContext(myContex);

  const testimonials = [
    {
      name: 'علی محمدی',
      role: 'دانشجوی دوره برنامه‌نویسی',
      content: 'کیفیت دوره‌ها عالیه و اساتید خیلی خوب توضیح میدن. من از این دوره‌ها خیلی راضی هستم.',
      rating: 5
    },
    {
      name: 'سارا احمدی',
      role: 'دانشجوی دوره طراحی',
      content: 'محتوای دوره‌ها به‌روز و کاربردی هست. پشتیبانی همیشه پاسخگو هستند.',
      rating: 5
    },
    {
      name: 'محمد رضایی',
      role: 'دانشجوی دوره بازاریابی',
      content: 'دوره‌ها خیلی جامع و کامل هستند. من تونستم با این دوره‌ها مهارت‌های جدیدی یاد بگیرم.',
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${them[0] === "dark" ? 'text-white' : 'text-gray-800'}`}>
            نظرات دانش‌آموزان
          </h2>
          <p className={`text-lg ${them[0] === "dark" ? 'text-gray-300' : 'text-gray-600'}`}>
            تجربیات دانش‌آموزان از دوره‌های ما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${them[0] === "dark" ? 'bg-gray-800/50' : 'bg-white'} shadow-lg`}
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className={`mb-4 ${them[0] === "dark" ? 'text-gray-300' : 'text-gray-600'}`}>
                {testimonial.content}
              </p>
              <div>
                <h4 className={`font-semibold ${them[0] === "dark" ? 'text-white' : 'text-gray-800'}`}>
                  {testimonial.name}
                </h4>
                <p className={`text-sm ${them[0] === "dark" ? 'text-gray-400' : 'text-gray-500'}`}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 