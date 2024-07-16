import Link from 'next/link'
import React from 'react'

export default function Sidebar({ data, router }) {
  return (
    <div className="bg-white w-[230px] h-full pt-8 shadow-md">
      <div className="">
        <ul className="flex fixed flex-col pt-[4rem]">
          {
            data?.map((dat: any) => (
              <Link href={dat.route} key={dat.id} className={`py-[10px] px-3 my-[10px] mx-[18px] mb-0 rounded-lg flex items-center font-medium ${router.route === dat.route ? 'bg-[#f5f6fa]' : ''}`}>
                <div className="mr-4 text-blue-500">
                  {router.route === dat.route ? dat.active : dat.inActive} 
                </div>
                <p className={`text-blue-500 ${router.route === dat.route ? 'font-semibold' : ''}`}>{dat.name}</p>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
