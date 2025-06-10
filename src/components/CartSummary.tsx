import React from "react";

interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <>
      <div className="text-xl font-bold text-left mt-8 pt-4">
        جمع کل: {total.toLocaleString()} تومان
      </div>

      <button className="mt-6 w-full bg-green-600 hover:bg-green-700 transition-colors py-3 rounded-xl text-lg font-medium">
        ادامه به پرداخت
      </button>
    </>
  );
};

export default CartSummary; 