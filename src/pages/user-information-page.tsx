import React, { useContext,useState } from 'react';
import { myContex } from "../app.jsx";
import UserProfile from '../components/user-info/UserProfile';
import EnrolledCourses from '../components/user-info/EnrolledCourses';
import SupportTickets from '../components/user-info/SupportTickets';
import TicketModal from '../components/user-info/ticket-modal';

export default function UserInformationPage() {
  const theme = useContext(myContex)[0];
  const [modalOpen,setOpenModal] = useState(false)

  const userInfo = {
    name: "علی محمدی",
    email: "ali.mohammadi@example.com",
    phone: "09123456789",
    location: "تهران، ایران",
    education: "کارشناسی مهندسی کامپیوتر",
    joinDate: "1402/01/01",
    courses: [
      { 
        title: "دوره جامع React.js",
        progress: 75,
        image: "https://example.com/react-course.jpg",
        instructor: "استاد محمدی",
        rating: 4.5,
        lastAccess: "2 روز پیش"
      },
      { 
        title: "دوره پیشرفته JavaScript",
        progress: 90,
        image: "https://example.com/js-course.jpg",
        instructor: "استاد احمدی",
        rating: 4.8,
        lastAccess: "1 روز پیش"
      },
      { 
        title: "دوره Node.js",
        progress: 45,
        image: "https://example.com/node-course.jpg",
        instructor: "استاد کریمی",
        rating: 4.2,
        lastAccess: "3 روز پیش"
      }
    ],
    tickets: [
      {
        id: 1,
        title: "مشکل در اجرای پروژه",
        status: "در انتظار پاسخ",
        date: "1402/12/15",
        priority: "بالا"
      },
      {
        id: 2,
        title: "سوال در مورد API",
        status: "پاسخ داده شده",
        date: "1402/12/10",
        priority: "متوسط"
      }
    ]
  };

  return (
    <div style={{
      backgroundImage: theme == "dark" 
        ? "linear-gradient(178.1deg, #3a2b6d 8.5%, #1a1535 82.4%)" 
        : "linear-gradient(178.1deg, #f5f7ff 8.5%, #edf0ff 82.4%)"
    }} className='min-h-screen py-16'>
      <div className="container mx-auto px-6">
        <UserProfile userInfo={userInfo} />
        <EnrolledCourses courses={userInfo.courses} />
        <SupportTickets ticketModal={[modalOpen,setOpenModal]} tickets={userInfo.tickets} />
        <TicketModal isOpen={modalOpen} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
}
