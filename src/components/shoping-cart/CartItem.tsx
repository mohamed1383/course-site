import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";

interface CartItemProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  price: number;
  quantity: number;
  onQuantityChange: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  description,
  duration,
  instructor,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="border-b border-white/20 py-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-sm text-gray-300 mb-2">{description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">⏱ {duration}</div>
            <div className="flex items-center gap-1">✔ مدرس: {instructor}</div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-end justify-between gap-2">
          <div className="flex items-center gap-3 text-base text-gray-200">
            <button
              onClick={() => quantity > 1 ? onQuantityChange(id, -1) : onRemove(id)}
              className={`${quantity > 1 ? "bg-[#E53935] hover:bg-[#D32F2F] px-3 py-1" : 'text-[#E53935] text-2xl'} rounded`}
            >
              {quantity === 1 ? <HiOutlineTrash /> : '-'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => onQuantityChange(id, 1)}
              className="px-3 py-1 bg-[#00C853] hover:bg-[#00B84D] rounded"
            >
              +
            </button>
          </div>
          <span className="text-lg font-bold">{price.toLocaleString()} تومان</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 