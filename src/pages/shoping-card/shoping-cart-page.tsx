import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";


const ShopingCartPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "دوره آموزش React مقدماتی تا پیشرفته",
      description: "آموزش کامل React با پروژه عملی، هوک‌ها، روتینگ، و API integration.",
      duration: "35 ساعت",
      instructor: "محمد رضایی",
      price: 490000,
      quantity: 1,
    },
    {
      id: 2,
      title: "دوره پروژه‌محور طراحی سایت با Tailwind CSS",
      description: "ساخت رابط‌های کاربری مدرن و رسپانسیو با تمرینات واقعی.",
      duration: "20 ساعت",
      instructor: "سارا احمدی",
      price: 390000,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id:number, delta:number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
    );
  };

  const handleRemove = (id:number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(178.1deg,_rgb(60,55,106)_8.5%,_rgb(23,20,69)_82.4%)] text-white p-4">
      <div className="w-full max-w-[1100px] bg-[#2d2a58] rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">سبد خرید</h1>

        {items.length === 0 ? (
          <p className="text-center text-gray-300">سبد خرید شما خالی است.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="border-b border-white/20 py-6"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">⏱ {item.duration}</div>
                    <div className="flex items-center gap-1">✔ مدرس: {item.instructor}</div>
                  </div>
                </div>
                <div className="flex flex-col-reverse items-end justify-between gap-2">
                  <div className="flex items-center gap-3 text-base text-gray-200">
                    <button
                      onClick={() => item.quantity > 1 ? handleQuantityChange(item.id, -1) : handleRemove(item.id)}
                      className={`${item.quantity > 1 ? "bg-[#E53935] hover:bg-[#D32F2F] px-3 py-1" : 'text-[#E53935] text-2xl'} rounded`}
                    >
                      {item.quantity == 1 ? <HiOutlineTrash></HiOutlineTrash> : '-'}
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-3 py-1 bg-[#00C853] hover:bg-[#00B84D] rounded"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-lg font-bold">{item.price.toLocaleString()} تومان</span>
                </div>
              </div>
            </div>
          ))
        )}

        {items.length > 0 && (
          <>
            <div className="text-xl font-bold text-left mt-8 pt-4">
              جمع کل: {total.toLocaleString()} تومان
            </div>

            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 transition-colors py-3 rounded-xl text-lg font-medium">
              ادامه به پرداخت
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopingCartPage;
