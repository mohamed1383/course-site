import React from 'react';
import { Button } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';

interface CoursePriceProps {
  price: number;
  theme: string;
}

export default function CoursePrice({ price, theme }: CoursePriceProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <Button
        variant="contained"
        startIcon={<FaShoppingCart />}
        sx={{
          fontFamily: 'iran-yekan',
          backgroundColor: theme === "dark" ? '#0066a3' : '#3a2b6d',
          '&:hover': {
            backgroundColor: theme === "dark" ? '#0099b3' : '#4b3689',
            transform: 'translateY(-2px)',
            boxShadow: theme === "dark" 
              ? '0 4px 8px rgba(0, 153, 179, 0.2)'
              : '0 4px 8px rgba(75, 54, 137, 0.15)'
          },
          transition: 'all 0.3s ease-in-out',
          padding: '10px 24px',
          borderRadius: '12px'
        }}
      >
        افزودن به سبد خرید
      </Button>
      <div className="text-left">
        <p className={`text-sm ${theme === "dark" 
          ? "text-[#3a2b6d]/50 dark:text-[#00c0e4]/50" 
          : "text-[#3a2b6d]/40"}`}>
          قیمت دوره
        </p>
        <p className={`text-2xl font-bold ${theme === "dark" 
          ? "text-[#0066a3] dark:text-[#0099b3]" 
          : "text-[#3a2b6d]/90"}`}>
          {price ? `${price.toLocaleString()} تومان` : "250,000 تومان"}
        </p>
      </div>
    </div>
  );
} 