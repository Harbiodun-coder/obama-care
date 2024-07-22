import React from 'react';
import { FaCalendarPlus } from 'react-icons/fa';

interface AppointmentProps {
  patientName: string;
  date: string;
  time: string;
}

const NewAppointmentsCard = ({ patientName, date, time }: AppointmentProps) => {
  return (
    <div className="bg-white p-4 shadow-md cursor-pointer border border-[#EDEDED] rounded-lg flex flex-col items-start gap-2 transition-transform transform hover:scale-105">
      <div className="flex items-center gap-2 mb-2">
        <FaCalendarPlus className="text-2xl text-[#009688]" />
        <div className="font-semibold text-xl md:text-2xl">New Appointment</div>
      </div>
      <div className="text-left">
        <p className="font-medium text-sm md:text-base text-[#BABABA]">Patient Name: {patientName}</p>
        <p className="font-medium text-sm md:text-base text-[#BABABA]">Date: {date}</p>
        <p className="font-medium text-sm md:text-base text-[#BABABA]">Time: {time}</p>
      </div>
    </div>
  );
};

export default NewAppointmentsCard;
