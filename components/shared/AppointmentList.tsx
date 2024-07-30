import React from 'react';
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

const appointments: Appointment[] = [
  {
    id: 1,
    doctorName: 'Samuel Jim',
    specialty: 'Medicine General',
    date: '2024-07-04',
    time: '16:00',
    duration: '45.00min',
    reviews: 65,
    rating: 4,
    imageUrl: '/1.jpg',
  },
  {
    id: 2,
    doctorName: 'Samuel Bonu',
    specialty: 'Cardiology',
    date: '2024-04-28',
    time: '16:00',
    duration: '45.00min',
    reviews: 65,
    rating: 4,
    imageUrl: '/2.jpg',
  },
  {
    id: 3,
    doctorName: 'Francis Matthew',
    specialty: 'Psycology',
    date: '2024-05-15',
    time: '16:00',
    duration: '45.00min',
    reviews: 65,
    rating: 4,
    imageUrl: '/3.jpg',
  },
  {
    id: 3,
    doctorName: 'Matthew Abiodun',
    specialty: 'Optician',
    date: '2024-05-15',
    time: '16:00',
    duration: '45.00min',
    reviews: 65,
    rating: 4,
    imageUrl: '/3.jpg',
  },
];

const AppointmentsList: React.FC = () => {
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
