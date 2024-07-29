// pages/doctor.tsx
import React from 'react';

import AppointmentCard from '@/components/card/AppointmentCard';
import Layout from '@/components/layout/DoctorLayout';
import Calendar from '@/components/card/Calender';
import Cards from '@/components/card/Cards';
import TaskCard from '@/components/card/TaskCard';

interface AppointmentProps {
  patientName: string;
  date: string;
  time: string;
  type: 'new' | 'upcoming';
}

const appointments: AppointmentProps[] = [
  { patientName: 'SAMUEL BONU', date: '2024-07-25', time: '10:00 AM', type: 'new' },
  { patientName: 'FRANCIS MATTHEW', date: '2024-07-26', time: '02:00 PM', type: 'upcoming' },
  { patientName: 'MATT', date: '2024-07-26', time: '02:00 PM', type: 'upcoming' },
  { patientName: 'METRO', date: '2024-07-26', time: '02:00 PM', type: 'new' },

];

const tasks: { task: string; dueDate: string; status: 'pending' | 'completed' }[] = [
  { task: 'Prepare for weekly team meeting', dueDate: '2024-07-30', status: 'pending' },
  { task: 'Review patient files', dueDate: '2024-08-01', status: 'completed' },
  { task: 'Update patient records', dueDate: '2024-08-05', status: 'pending' },
];

const Doctor: React.FC = () => {
  return (
    <Layout>
      <div className='w-full h-full'>
        <div className="md:grid grid-cols-4 gap-5 flex flex-col w-full">
          <div className='md:col-span-3 w-full flex flex-col gap-4'>
            <Cards />
            <div className='flex flex-col gap-4'>
              {appointments.map((appointment, index) => (
                <AppointmentCard
                  key={index}
                  patientName={appointment.patientName}
                  date={appointment.date}
                  time={appointment.time}
                  type={appointment.type}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-4">
            <Calendar />
            <div>
              <h2 className="text-xl font-bold">Tasks</h2>
              <div className="flex flex-col gap-3">
              {tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task.task}
                  dueDate={task.dueDate}
                  status={task.status}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctor;
