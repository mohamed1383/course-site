import React, { useContext } from 'react';
import { myContex } from "../../app.jsx";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  joinDate: string;
}

interface UserProfileProps {
  userInfo: UserInfo;
}

export default function UserProfile({ userInfo }: UserProfileProps) {
  const theme = useContext(myContex)[0];

  return (
    <div dir='rtl' className={`rounded-3xl p-8 mb-12 shadow-2xl backdrop-blur-sm
      ${theme === "dark" 
        ? "bg-[#4a3b7d]/80 border border-[#00c0e4]/20" 
        : "bg-white/90 border border-[#3a2b6d]/10"}`}>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className={`w-32 h-32 rounded-2xl flex items-center justify-center text-5xl
          ${theme === "dark" 
            ? "bg-gradient-to-br from-[#00c0e4]/20 to-[#00c0e4]/5 text-[#00c0e4]" 
            : "bg-gradient-to-br from-[#3a2b6d]/10 to-[#3a2b6d]/5 text-[#3a2b6d]"}`}>
          <FaUser />
        </div>
        <div className="text-center md:text-right">
          <h2 className={`text-3xl font-bold mb-3
            ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
            {userInfo.name}
          </h2>
          <p className={`text-xl
            ${theme === "dark" ? "text-[#00c0e4]" : "text-[#3a2b6d]/80"}`}>
            {userInfo.education}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`flex items-center gap-4 p-5 rounded-2xl
          ${theme === "dark" 
            ? "bg-[#4a3b7d]/40 border border-[#00c0e4]/20" 
            : "bg-[#3a2b6d]/5 border border-[#3a2b6d]/10"}`}>
          <div className={`p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-[#00c0e4]/10 text-[#00c0e4]" 
              : "bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
            <FaEnvelope className="text-2xl" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1
              ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
              ایمیل
            </p>
            <p className={`text-lg
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              {userInfo.email}
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-4 p-5 rounded-2xl
          ${theme === "dark" 
            ? "bg-[#4a3b7d]/40 border border-[#00c0e4]/20" 
            : "bg-[#3a2b6d]/5 border border-[#3a2b6d]/10"}`}>
          <div className={`p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-[#00c0e4]/10 text-[#00c0e4]" 
              : "bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
            <FaPhone className="text-2xl" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1
              ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
              شماره تماس
            </p>
            <p className={`text-lg
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              {userInfo.phone}
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-4 p-5 rounded-2xl
          ${theme === "dark" 
            ? "bg-[#4a3b7d]/40 border border-[#00c0e4]/20" 
            : "bg-[#3a2b6d]/5 border border-[#3a2b6d]/10"}`}>
          <div className={`p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-[#00c0e4]/10 text-[#00c0e4]" 
              : "bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1
              ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
              موقعیت
            </p>
            <p className={`text-lg
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              {userInfo.location}
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-4 p-5 rounded-2xl
          ${theme === "dark" 
            ? "bg-[#4a3b7d]/40 border border-[#00c0e4]/20" 
            : "bg-[#3a2b6d]/5 border border-[#3a2b6d]/10"}`}>
          <div className={`p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-[#00c0e4]/10 text-[#00c0e4]" 
              : "bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
            <FaCalendarAlt className="text-2xl" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1
              ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
              تاریخ عضویت
            </p>
            <p className={`text-lg
              ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
              {userInfo.joinDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 