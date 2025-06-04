import React, { useContext, useEffect } from 'react';
import { myContex } from '../../app';
import { ThemeContextType } from '../../types/context';
import { FaTimes } from 'react-icons/fa';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [theme] = useContext(myContex) as ThemeContextType;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div dir='rtl' className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-2xl mx-4 p-8 rounded-3xl shadow-2xl
        ${theme === "dark" 
          ? "bg-[#4a3b7d] border border-[#00c0e4]/20" 
          : "bg-white border border-[#3a2b6d]/10"}`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-xl
            ${theme === "dark" 
              ? "hover:bg-[#00c0e4]/10 text-[#e0e0ff]" 
              : "hover:bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
          <FaTimes className="text-xl" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-bold mb-2
            ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
            ایجاد تیکت جدید
          </h2>
          <p className={`text-base
            ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
            لطفاً اطلاعات تیکت خود را وارد کنید
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium mb-2
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              عنوان تیکت
            </label>
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-xl text-base
                ${theme === "dark"
                  ? "bg-[#3a2b6d] border border-[#00c0e4]/20 text-[#e0e0ff] placeholder-[#e0e0ff]/40"
                  : "bg-[#f5f5f5] border border-[#3a2b6d]/10 text-[#3a2b6d] placeholder-[#3a2b6d]/40"}`}
              placeholder="عنوان تیکت خود را وارد کنید"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              دسته‌بندی
            </label>
            <select
              className={`w-full px-4 py-3 rounded-xl text-base
                ${theme === "dark"
                  ? "bg-[#3a2b6d] border border-[#00c0e4]/20 text-[#e0e0ff]"
                  : "bg-[#f5f5f5] border border-[#3a2b6d]/10 text-[#3a2b6d]"}`}
            >
              <option value="">انتخاب دسته‌بندی</option>
              <option value="technical">مشکل فنی</option>
              <option value="financial">مشکل مالی</option>
              <option value="content">مشکل محتوا</option>
              <option value="other">سایر</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              اولویت
            </label>
            <select
              className={`w-full px-4 py-3 rounded-xl text-base
                ${theme === "dark"
                  ? "bg-[#3a2b6d] border border-[#00c0e4]/20 text-[#e0e0ff]"
                  : "bg-[#f5f5f5] border border-[#3a2b6d]/10 text-[#3a2b6d]"}`}
            >
              <option value="">انتخاب اولویت</option>
              <option value="high">بالا</option>
              <option value="medium">متوسط</option>
              <option value="low">پایین</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              توضیحات
            </label>
            <textarea
              rows={4}
              className={`w-full px-4 py-3 rounded-xl text-base resize-none
                ${theme === "dark"
                  ? "bg-[#3a2b6d] border border-[#00c0e4]/20 text-[#e0e0ff] placeholder-[#e0e0ff]/40"
                  : "bg-[#f5f5f5] border border-[#3a2b6d]/10 text-[#3a2b6d] placeholder-[#3a2b6d]/40"}`}
              placeholder="توضیحات خود را وارد کنید"
            />
          </div>

          <div className="flex justify-start gap-4">
            <button
              type="button"
              onClick={onClose}
              className={`px-6 py-3 rounded-xl text-base font-medium
                ${theme === "dark"
                  ? "bg-[#3a2b6d] text-[#e0e0ff] hover:bg-[#3a2b6d]/80"
                  : "bg-[#f5f5f5] text-[#3a2b6d] hover:bg-[#f5f5f5]/80"}`}
            >
              انصراف
            </button>
            <button
              className={`px-6 py-3 rounded-xl text-base font-medium text-white
                ${theme === "dark"
                  ? "bg-[#00c0e4] hover:bg-[#00c0e4]/90"
                  : "bg-[#3a2b6d] hover:bg-[#3a2b6d]/90"}`}
            >
              ارسال تیکت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
