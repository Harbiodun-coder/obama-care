import React from 'react';
import { FaCalendarPlus, FaCalendarCheck } from 'react-icons/fa';

interface AppointmentProps {
  patientName: string;
  date: string;
  time: string;
  type: 'new' | 'upcoming';
}

const AppointmentCard = ({ patientName, date, time, type }: AppointmentProps) => {
  const isNew = type === 'new';
  const icon = isNew ? <FaCalendarPlus className="text-2xl text-[#009688]" /> : <FaCalendarCheck className="text-2xl text-[#0065C2]" />;
  const title = isNew ? 'New Appointment' : 'Upcoming Appointment';

  return (
    <div className="bg-white p-4 shadow-md cursor-pointer border border-[#EDEDED] rounded-lg flex flex-col items-start gap-2 ">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <div className="font-semibold text-xl md:text-2xl">{title}</div>
      </div>
      <div className="text-left">
        <p className="font-medium text-sm md:text-base text-[#BABABA]">Patient Name: {patientName}</p>
        <p className="font-medium text-sm md:text-base text-[#BABABA]">Date: {date}</p>
        <p className="font-medium text-sm md:text-base text-[#BABABA]">Time: {time}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
