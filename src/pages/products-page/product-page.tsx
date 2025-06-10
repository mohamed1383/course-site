import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const categories = [
    { id: 'all', name: 'همه دوره‌ها' },
    { id: 'programming', name: 'برنامه‌نویسی' },
    { id: 'frontend', name: 'فرانت‌اند' },
    { id: 'web', name: 'توسعه وب' },
    { id: 'data', name: 'علم داده' }
];

const products = [
    {
        id: 1,
        title: 'دوره آموزش پایتون مقدماتی تا پیشرفته',
        price: 2900000,
        description: 'یادگیری اصول برنامه‌نویسی پایتون از پایه تا پیشرفته با پروژه‌های عملی',
        image: 'https://via.placeholder.com/150',
        duration: '40 ساعت',
        instructor: 'علی محمدی',
        rating: 4.8,
        students: 1250,
        level: 'مقدماتی تا پیشرفته',
        category: 'programming'
    },
    {
        id: 2,
        title: 'دوره جامع جاوااسکریپت',
        price: 1900000,
        description: 'آموزش کامل جاوااسکریپت مدرن با تمرینات عملی و پروژه‌های واقعی',
        image: 'https://via.placeholder.com/150',
        duration: '35 ساعت',
        instructor: 'سارا احمدی',
        rating: 4.9,
        students: 980,
        level: 'متوسط',
        category: 'frontend'
    },
    {
        id: 3,
        title: 'دوره جامع توسعه وب',
        price: 9900000,
        description: 'یادگیری توسعه وب کامل با تمرکز بر تکنولوژی‌های مدرن',
        image: 'https://via.placeholder.com/150',
        duration: '60 ساعت',
        instructor: 'رضا کریمی',
        rating: 4.7,
        students: 750,
        level: 'پیشرفته',
        category: 'web'
    },
    {
        id: 4,
        title: 'دوره علم داده با پایتون',
        price: 3900000,
        description: 'آموزش تحلیل داده و علم داده با پایتون و کتابخانه‌های معروف',
        image: 'https://via.placeholder.com/150',
        duration: '45 ساعت',
        instructor: 'مریم حسینی',
        rating: 4.6,
        students: 620,
        level: 'متوسط',
        category: 'data'
    },
];

export default function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentSlide, setCurrentSlide] = useState(0);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    };

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    const slidesPerView = 4;
    const totalSlides = Math.ceil(filteredProducts.length / slidesPerView);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const visibleProducts = filteredProducts.slice(
        currentSlide * slidesPerView,
        (currentSlide + 1) * slidesPerView
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-4">
            <div className="container mx-auto py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold pb-2.5 mb-4 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                        دوره‌های آموزشی
                    </h1>
                    <p className="text-gray-300 text-lg">بهترین دوره‌های آموزشی با اساتید برجسته</p>
                </div>

                <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.id);
                                setCurrentSlide(0);
                            }}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white'
                                    : 'bg-[#1e293b] text-gray-300 hover:bg-[#2d3748]'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

 
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {visibleProducts.map(product => (
                            <div key={product.id} 
                                className="bg-[#0f172a]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col">
                                <div className="relative">
                                    <img src={product.image} 
                                        className="w-full h-48 object-cover" />
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{product.title}</h2>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    
                                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                                        <div className="flex items-center bg-[#1e293b] px-3 py-1 rounded-full">
                                            <span>⏱️ {product.duration}</span>
                                        </div>
                                        <div className="flex items-center bg-[#1e293b] px-3 py-1 rounded-full">
                                            <span>👤 {product.instructor}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center bg-[#1e293b] px-3 py-1 rounded-full">
                                            <span className="text-yellow-400">⭐</span>
                                            <span className="mx-1">{product.rating}</span>
                                            <span className="text-gray-400 text-sm">
                                                ({product.students} دانشجو)
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                                            {formatPrice(product.price)}
                                        </span>
                                        <button className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#6d28d9] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                                            افزودن به سبد خرید
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

      
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-[#1e293b] p-3 rounded-full hover:bg-[#2d3748] transition-colors"
                            >
                                <FaChevronLeft className="text-xl" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-[#1e293b] p-3 rounded-full hover:bg-[#2d3748] transition-colors"
                            >
                                <FaChevronRight className="text-xl" />
                            </button>
                        </>
                    )}

          
                    {totalSlides > 1 && (
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentSlide === index
                                            ? 'bg-[#4f46e5] w-4'
                                            : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
