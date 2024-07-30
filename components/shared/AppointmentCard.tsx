import React from 'react';
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineDateRange } from 'react-icons/md';
import { GiDuration } from "react-icons/gi";

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

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-start justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center">
        <img src={appointment.imageUrl} alt={appointment.doctorName} className="w-16 h-16 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{appointment.doctorName}</h3>
          <p className="text-sm text-gray-600">{appointment.specialty}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">{'★'.repeat(appointment.rating)}</span>
            <span className="ml-2 text-gray-600 text-sm">({appointment.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 gap-2 text-[11.5px] md:text-sm md:font-bold font-semibold">
        <div className="flex items-center gap-2 ">
        <LuAlarmClock className="w-5 h-5" />
          <span>{appointment.time}</span>
        </div>
        <div className="flex items-center gap-2">
        <MdOutlineDateRange className="w-5 h-5" />
          <span>{appointment.date}</span>
        </div>
        <div className="flex items-center gap-2">
        <GiDuration className="w-5 h-5" />
          <span>{appointment.duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
