import React, { useState } from 'react';
import Modal from '../shared/AppointmentModal';
import { FaCalendarCheck } from 'react-icons/fa';

interface AppointmentProps {
  patientName: string;
  date: string;
  time: string;
  status: string;
  image: string;
}

const AppointmentCard = ({ patientName, date, time, status, image }: AppointmentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleApprove = () => {
    console.log('Approved:', { patientName, date, time, status, image });
    setIsModalOpen(false);
  };

  const handleDecline = () => {
    
    console.log('Declined:', { patientName, date, time, status, image });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white p-4 shadow-md cursor-pointer border border-[#EDEDED] rounded-lg flex flex-col items-start gap-2" onClick={handleOpenModal}>
        <div className="flex items-center gap-2 mb-2">
          <FaCalendarCheck className="text-2xl text-[#0065C2]" />
          <div className="font-semibold text-xl md:text-2xl">Appointment</div>
        </div>
        <div className="text-left">
          <p className="font-medium text-sm md:text-base text-[#BABABA]">Patient Name: {patientName}</p>
          <p className="font-medium text-sm md:text-base text-[#BABABA]">Date: {date}</p>
          <p className="font-medium text-sm md:text-base text-[#BABABA]">Time: {time}</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        appointment={{ patient: patientName, date, time, status, image }}
        onApprove={handleApprove}
        onDecline={handleDecline}
      />
    </>
  );
};

export default AppointmentCard;
