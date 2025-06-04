import React, { useContext } from 'react';
import { myContex } from '../../app';
import { FaGraduationCap, FaUsers, FaCertificate, FaClock } from 'react-icons/fa';

const FeaturesSection = () => {
  const them = useContext(myContex);

  const features = [
    {
      icon: FaGraduationCap,
      title: 'اساتید برجسته',
      description: 'یادگیری از بهترین اساتید با تجربه در حوزه‌های مختلف'
    },
    {
      icon: FaUsers,
      title: 'جامعه یادگیری',
      description: 'ارتباط با سایر دانش‌آموزان و تبادل تجربیات'
    },
    {
      icon: FaCertificate,
      title: 'گواهی نامه معتبر',
      description: 'دریافت گواهی نامه معتبر پس از اتمام دوره‌ها'
    },
    {
      icon: FaClock,
      title: 'یادگیری انعطاف‌پذیر',
      description: 'دسترسی به محتوا در هر زمان و مکان'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${them[0] === "dark" ? 'text-white' : 'text-gray-800'}`}>
            چرا باید ما را انتخاب کنید؟
          </h2>
          <p className={`text-lg ${them[0] === "dark" ? 'text-gray-300' : 'text-gray-600'}`}>
            مزایای یادگیری در پلتفرم ما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${them[0] === "dark" ? 'bg-gray-800/50' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-blue-500 mb-4">
                <feature.icon size={40} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${them[0] === "dark" ? 'text-white' : 'text-gray-800'}`}>
                {feature.title}
              </h3>
              <p className={`${them[0] === "dark" ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 