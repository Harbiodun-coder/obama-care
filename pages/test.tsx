
import Cards from '@/components/card/Cards'
import Layout from '@/components/DoctorLayout'
import React from 'react'


export default function index() {
  return (
    <div>
      <Layout>
        <div className=' w-full h-full'>
          <div className='md:grid grid-cols-4 gap-5 flex flex-col  w-full '>
            <div className='md:col-span-3 w-full flex flex-col gap-4'>
                <Cards />
                <div>
                {/* <Barchart1 /> */}
                {/* <Barchart2 /> */}
                </div>
              </div>
            <div className='flex flex-col gap-10 w-full   '>
              {/* <StudentDonut /> */}
              {/* <StaffDoughnut /> */}
            </div>
            </div>
          </div>
   
      </Layout>
    </div>
  )
}