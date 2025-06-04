import React, { useContext } from 'react';
import { myContex } from '../../app';
import { FaTicketAlt, FaPlus } from 'react-icons/fa';
import { Ticket } from '../../types/ticket';
import { ThemeContextType } from '../../types/context';

interface SupportTicketsProps {
  tickets: Ticket[];
  ticketModal: [boolean, (isOpen: boolean) => void];
}

export default function SupportTickets({ tickets, ticketModal }: SupportTicketsProps) {
  const [theme] = useContext(myContex) as ThemeContextType;
  const [isOpen, setOpenModal] = ticketModal;

  return (
    <div dir='rtl' className={`rounded-3xl p-8 shadow-2xl backdrop-blur-sm
      ${theme === "dark" 
        ? "bg-[#4a3b7d]/80 border border-[#00c0e4]/20" 
        : "bg-white/90 border border-[#3a2b6d]/10"}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-3xl font-bold flex items-center gap-4
          ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
          <div className={`p-3 rounded-xl
            ${theme === "dark" 
              ? "bg-[#00c0e4]/10 text-[#00c0e4]" 
              : "bg-[#3a2b6d]/10 text-[#3a2b6d]"}`}>
            <FaTicketAlt className="text-2xl" />
          </div>
          تیکت‌های پشتیبانی
        </h2>
        <button 
          onClick={() => setOpenModal(true)}
          className={`px-6 py-3 rounded-xl flex items-center gap-3 text-lg font-medium cursor-pointer
          ${theme === "dark"
            ? "bg-[#00c0e4] text-white"
            : "bg-[#3a2b6d] text-white"}`}>
          <FaPlus />
          تیکت جدید
        </button>
      </div>
      <div className="space-y-6">
        {tickets.map((ticket) => (
          <div key={ticket.id} className={`p-6 rounded-2xl
            ${theme === "dark" 
              ? "bg-[#4a3b7d]/40 border border-[#00c0e4]/20" 
              : "bg-[#3a2b6d]/5 border border-[#3a2b6d]/10"}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold
                ${theme === "dark" ? "text-[#e0e0ff]" : "text-[#3a2b6d]"}`}>
                {ticket.title}
              </h3>
              <span className={`px-4 py-2 rounded-xl text-sm font-medium
                ${ticket.status === "پاسخ داده شده"
                  ? theme === "dark"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-green-500/10 text-green-600"
                  : theme === "dark"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-yellow-500/10 text-yellow-600"}`}>
                {ticket.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className={`text-base
                ${theme === "dark" ? "text-[#e0e0ff]/60" : "text-[#3a2b6d]/60"}`}>
                تاریخ: {ticket.date}
              </p>
              <span className={`px-4 py-2 rounded-xl text-sm font-medium
                ${ticket.priority === "بالا"
                  ? theme === "dark"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-red-500/10 text-red-600"
                  : ticket.priority === "متوسط"
                    ? theme === "dark"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-yellow-500/10 text-yellow-600"
                    : theme === "dark"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-green-500/10 text-green-600"}`}>
                {ticket.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 