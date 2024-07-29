
import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface Appointment {
  date: string;
  time: string;
  doctor: string;
}

const appointments: Appointment[] = [
  { date: '2024-07-30', time: '10:00 AM', doctor: 'Dr. Smith' },
  { date: '2024-08-02', time: '01:00 PM', doctor: 'Dr. Johnson' },
];

const Dashboard: React.FC = () => {
  return (
    <div className={`min-h-screen bg-gray-100 p-4 ${montserrat.className}`}>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        </header>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, [Patient Name]</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
            <ul className="space-y-4">
              {appointments.map((appointment, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-md shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{appointment.date} at {appointment.time}</p>
                    <p>with {appointment.doctor}</p>
                  </div>
                  <Link href={`/patient/appointments/${index}`} className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between ">
            <Link href="/patient/book-appointment"  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            
                Book New Appointment
              
            </Link>
            <Link href="/patient/medical-records" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
             
                View Medical Records
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
