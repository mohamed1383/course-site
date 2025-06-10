import React, { useState } from "react";
import CartItem from "../../components/shoping-cart/CartItem";
import CartSummary from "../../components/shoping-cart/CartSummary";

interface CartItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  price: number;
  quantity: number;
}

const ShopingCartPage = () => {
  const [items, setItems] = useState<CartItem[]>([
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

  const handleQuantityChange = (id: number, delta: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
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
          <>
            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
            <CartSummary total={total} />
          </>
        )}
      </div>
    </div>
  );
};

export default ShopingCartPage;
