
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

import { useRouter } from "next/router";
import Button from "../shared/Button";

import Modal from "../shared/Modal";
import Hamburger from "./Hamburger";



const Layout = ({ children }) => {
  const [open, setOpen] = useState(Boolean);
  const action = () => {
    setOpen(false);
  };
  const router = useRouter();
 

  const handleLogout = () => {
 
    console.log("User Logged Out");
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      <div className="md:w-1/4  ">
        <Hamburger   />
      </div>

      <div className="w-full overflow-y-scroll bg-white-100">
        <div className="flex justify-between mb-2 bg-white-100 py-3 px-4  md:px-9 relative border-b border-white-300">
          {/* Render search bar and icons only on larger screens */}
          <div className=" w-1/3 md:w-full flex relative items-center ">
            <CiSearch className="h-5 w-5 text-[#475367] absolute left-4" />
            <input
              type="text"
              placeholder=" Search here..."
              className=" py-2 pl-10 pr-2 text-sm bg-[#F9FAFB]  rounded-sm focus:outline-none w-[629px] focus:border-blue-500 focus:border"
            />
          </div>
          <div className="md:flex  hidden justify-between items-center gap-2">
            {/* Render icons only on larger screens */}
            <div className="hidden md:flex w-10 h-10 items-center justify-center bg-[#F0F2F5] rounded-[50%] ">
              <IoMdNotificationsOutline className="h-6 w-6 text-[#475367]" />
            </div>

            <div className="hidden md:block">
              <img
                src="/Avatars.png"
                alt="Image"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
         
        </div>
        <div className=" h-[calc(100vh-64px)] bg-white-100 p-4 rounded-lg overflow-y-scroll scrollbar-hidden">
          <div className="">
            <Modal action={action} open={open}>
              <div className="flex flex-col gap-6  md:p-4">
                <div className=" font-semibold text-xl md:text-3xl text-[#0065C2]">
                  Do You Want to Log out?
                </div>
                <div className=" grid grid-cols-2 gap-2">
                  <Button
                    intent="primary"
                    size="sm"
                    text="Yes"
                    isLoading = {false}
                                />
                  <Button
                    intent="primary"
                    size="sm"
                    text="No"
                    isLoading = {false}
                                   />
                </div>
              </div>
            </Modal>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
