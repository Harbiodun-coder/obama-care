import { useOutsideClick } from '@/hooks/useOutsideClick';
import Image from 'next/image'
import React, { useRef } from 'react'
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Header({ handleMenu }: any) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  return (
    <div className="px-6 h-16 flex justify-between items-center border-bborder-[#E2E8F0] fixed w-[100vw] bg-white top-0" >
    <div className="md:block hidden">
        <div>Logo Here</div>
      </div>
      <div className="  flex relative items-center ">
            <CiSearch className="h-5 w-5 text-[#475367] absolute left-4" />
            <input
              type="text"
              placeholder=" Search here..."
              className=" py-2 pl-10 pr-2 text-sm bg-[#F9FAFB]  rounded-md focus:outline-none w-[629px] focus:border-blue-500 focus:border"
            />
          </div>
      <div className="md:hidden" onClick={handleMenu}>
        <HiMenuAlt3 className="w-7 h-7" />
      </div>
      <div className="md:flex hidden justify-center relative items-center">
        <div>
          <Image src="bell.svg" alt="bell" width={40} height={50} />
        </div>
        <div className="rounded-xl bg-[#F5F6FA] flex py-2 items-center ml-4 cursor-pointer pl-2 pr-3" onClick={onClick}>
          <Image src="profile.svg" alt="" width={35} height={40} />
          <p className="ml-2 mr-4">Matt</p>
          <Image src="arrow-down.svg" width={20} height={20} alt="" />
          <nav
            ref={dropdownRef}
            className={`absolute top-[40px] right-0 w-[300px] opacity-0 invisible -translate-y-5 transform transition-opacity ${
              isActive ? 'opacity-100 visible translate-y-0' : 'inactive'
            } absolute bottom-[-30px] right-0 mt-4`}
            >
            <ul className=' list-none p-0 m-0 border border-[red]'>
              <li>
                <a href="#" className=' no-underline text-[#333333] py-[15px] px-5 block'>Amin</a>
              </li>
            </ul>
          </nav>
            </div>
      </div>
    </div>
  )
}