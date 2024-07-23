import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaList } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";


export default function Sidebar({
  logout,
 
}: {
  logout: any;
 
}) {
  const router = useRouter()
  
 

  
  const nav = [
    {
      icon: <RxDashboard />,
      name: "Dashboard",
      path: `/dashboard/patient`,
    },

    {
      icon: <FaList />,
      name: "Appointments",
      path: `/patient/appointment`,
    },
    {
      icon: <HiOutlineUsers />,
      name: "Medical Records",
      path: `/patient/medical`,
    },
    {
      icon: <IoPersonCircleOutline />,
      name: "Profile",
      path: `/patient/profile`,
    },
   
   
  ];

  return (
    <div className="bg-[#0065C2] w-full md:w-1/5 text-[white] p-6 h-screen  fixed z-30 md:z-0 md:bg-opacity-90 flex flex-col gap-6 ">
      <p className="text-white font-bold text-xl hidden md:block">OBAMA CARE</p>
      <div className="flex flex-col gap-5 pt-10 md:pt-0">
        {nav.map((item, index) => (
          <div key={index}>
            <Link href={item.path} key={index}>
              <button
                className={`${
                  router.asPath === item.path
                    ? "bg-white-200 text-[#0065C2]"
                    : ""
                } flex gap-2 text-white w-full font-medium items-center hover:bg-white hover:text-[#0065C2] p-3 rounded-lg hover:bg-white-100 `}
              >
                <p className="text-xl">{item.icon}</p>
                <p className="text-xs">{item.name}</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button
          className="flex gap-2 text-white w-full font-medium items-center hover:bg-white hover:text-[#0065C2] p-3 rounded-lg hover:bg-white-100 "
          onClick={logout}
        >
          <p className="text-2xl">
            <CiLogout />
          </p>
          <p className="text-base ">Log Out</p>
        </button>
      </div>
    </div>
  );
}
