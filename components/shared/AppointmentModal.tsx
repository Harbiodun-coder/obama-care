import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: {
    patient: string;
    date: string;
    time: string;
    status: string;
    image: string;
  };
  onApprove: () => void;
  onDecline: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, appointment, onApprove, onDecline }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-96">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Appointment Details</h2>
        <div className="flex items-center mb-4">
          <img src={appointment.image} alt={appointment.patient} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="font-medium">Patient: {appointment.patient}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Status: {appointment.status}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          {appointment.status !== 'Attended' && (
            <>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={onApprove}
              >
                Approve
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={onDecline}
              >
                Decline
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
