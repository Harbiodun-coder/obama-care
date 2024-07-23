import React from 'react';
import Cards from '@/components/card/Cards';

import Layout from '@/components/layout/DoctorLayout';
import NewAppointmentsCard from '@/components/card/NewAppointments';
import UpcomingAppointmentsCard from '@/components/card/UpcomingAppointments';

const appointments = [
  { patientName: 'SAMUEL BONU', date: '2024-07-25', time: '10:00 AM' },
  { patientName: 'FRANCIS MATTHEW', date: '2024-07-26', time: '02:00 PM' },
  { patientName: 'MATT', date: '2024-07-26', time: '02:00 PM' },
  { patientName: 'METRO', date: '2024-07-26', time: '02:00 PM' },
  { patientName: 'BASH', date: '2024-07-26', time: '02:00 PM' },
];

export default function Doctor() {
  return (
    <div>
      <Layout>
        <div className='w-full h-full'>
          <div className='md:grid grid-cols-4 gap-5 flex flex-col w-full'>
            <div className='md:col-span-3 w-full flex flex-col gap-4'>
              <Cards />
              <div className='flex flex-col gap-4'>
                {appointments.map((appointment, index) => (
                  <NewAppointmentsCard
                    key={index}
                    patientName={appointment.patientName}
                    date={appointment.date}
                    time={appointment.time}
                  />
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-10 w-full'>
              {appointments.map((appointment, index) => (
                <UpcomingAppointmentsCard
                  key={index}
                  patientName={appointment.patientName}
                  date={appointment.date}
                  time={appointment.time}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
