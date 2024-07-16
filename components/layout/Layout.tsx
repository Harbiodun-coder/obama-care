import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useRouter } from 'next/router';
import React from 'react'
import Header from './Header';
import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';
import { CiHome } from "react-icons/ci";
import { FaCalendarAlt, FaUsers, FaCogs, FaSignOutAlt } from 'react-icons/fa'; 
import { AiOutlineSchedule } from 'react-icons/ai';

const data = [
  {
    id: 1,
    route: '/dashboard',
    name: 'Dashboard',
    active: <CiHome className="text-blue-500" />,
    inActive: <CiHome className="text-blue-500" style={{ opacity: 0.6 }} />, 
  },
  {
    id: 2,
    route: '/schedule',
    name: 'Schedule',
    active: <AiOutlineSchedule className="text-blue-500" />,
    inActive: <AiOutlineSchedule className="text-blue-500" style={{ opacity: 0.6 }} />,
  },
  {
    id: 3,
    route: '/appointments',
    name: 'Appointments',
    active: <FaCalendarAlt className="text-blue-500" />,
    inActive: <FaCalendarAlt className="text-blue-500" style={{ opacity: 0.6 }} />,
  },
  {
    id: 4,
    route: '/patients',
    name: 'Patients',
    active: <FaUsers className="text-blue-500" />,
    inActive: <FaUsers className="text-blue-500" style={{ opacity: 0.6 }} />,
  },
  {
    id: 5,
    route: '/settings',
    name: 'Settings',
    active: <FaCogs className="text-blue-500" />,
    inActive: <FaCogs className="text-blue-500" style={{ opacity: 0.6 }} />,
  },
  {
    id: 6,
    route: '/logout',
    name: 'Log out',
    active: <FaSignOutAlt className="text-blue-500" />,
    inActive: <FaSignOutAlt className="text-blue-500" style={{ opacity: 0.6 }} />,
  },
];

export default function DashboardLayout({ children }: any) {
  const [show, setShow] = React.useState(false);
  const handleMenu = () => {
    setShow(!show);
  };
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const router = useRouter();

  return (
    <div className='h-screen'>
      <Header handleMenu={handleMenu} />
      {show && (
        <MobileSidebar handleMenu={handleMenu} data={data} router={router} />
      )}
      <div className="grid bg-[white] grid-cols-[230px_calc(100vw-245px)] h-full max-mobile:grid-cols-1">
        <Sidebar data={data} router={router} />
        <div className="pt-[80px] px-4 md:px-8 h-[calc(100vh-1rem)] overflow-scroll scrollbar-hidden scroll-smooth">
          {children}
        </div>
      </div>
      {/* Profile */}
    </div>
  )
}
