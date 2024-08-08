import React, { useState, useEffect } from 'react';
import AppointmentCard from './AppointmentCard';
import dayjs from 'dayjs';

interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  duration: string;
  reviews: number;
  rating: number;
  imageUrl: string;
}

const AppointmentsList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/api/patient/appointment', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }

        const data = await response.json();
        setAppointments(data.appointments); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const today = dayjs();

  
  const sortedAppointments = appointments.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

 

  return (
    <div className="">
      {sortedAppointments.length > 0 ? (
        sortedAppointments.map(appointment => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default AppointmentsList;
