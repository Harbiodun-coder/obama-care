
import React, { useState, useEffect } from 'react';
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

interface TaskProps {
  task: string;
  dueDate: string;
  status: 'pending' | 'completed';
}

const Doctor: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsResponse = await fetch('/api/appointments');
        if (!appointmentsResponse.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const appointmentsData: AppointmentProps[] = await appointmentsResponse.json();
        setAppointments(appointmentsData);

        const tasksResponse = await fetch('/api/tasks');
        if (!tasksResponse.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const tasksData: TaskProps[] = await tasksResponse.json();
        setTasks(tasksData);
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log(false);
      }
    };

    fetchData();
  }, []);

  

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
