import React, { useState, useEffect } from 'react';
import AppointmentCard from '@/components/card/AppointmentCard';
import Layout from '@/components/layout/DoctorLayout';
import Calendar from '@/components/card/Calender';
import Cards from '@/components/card/Cards';


interface AppointmentProps {
  patientName: string;
  date: string;
  time: string;
  status:   'Attended' | 'Not Attended';
  image: string;
}


const Doctor: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsResponse = await fetch('/doctorAppointment.json');
        if (!appointmentsResponse.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await appointmentsResponse.json();
        setAppointments(data.appointments || []);
      } catch (error) {
        console.log(error.message);
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
                  status={appointment.status} image={appointment.image}                />
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-4">
            <Calendar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctor;
