import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiX } from 'react-icons/hi'

export default function MobileSidebar({handleMenu, data, router}: any) {
  return (
    <div className="z-[100] transition-all h-full duration-500 ease-in bg-white block md:hidden min-h-full min-w-full absolute">
              <div className="bg-white w-[230px] pt-8 !flex transition-all duration-500 ease-in">
                <div className="px-3 mx-[18px]">
              <Image src="/icons/logo-dark.svg" width={80} height={80} alt="" />
                </div>
                <ul className="flex fixed flex-col w-[100%] mt-[2rem]">
                  {
                    data?.map((dat:any)=> (
                      <Link href={dat.route} key={dat.id} className={` py-[10px] px-3 my-[10px] mx-[18px] mb-0 rounded-lg flex items-center font-medium  ${router.route === dat.route ? 'bg-[#f5f6fa]' : ''}`}>
                      <Image
                      className="mr-4"
                      src={router.route === dat.route ? dat.active : dat.inActive}
                      alt=""
                      width={20}
                      height={20}
                      />
                    <p className={`text-[#9ca8ba] ${router.route===dat.route ? 'text-[#393ecc]' : ''}`}>{dat.name}</p>
                      </Link>
                    ))
                  }
                </ul>
              </div>
              <HiX
              onClick={handleMenu}
              className="w-6 h-6 absolute top-5 right-5 text-[#9ca8ba]"
            />
            </div>
  )
}