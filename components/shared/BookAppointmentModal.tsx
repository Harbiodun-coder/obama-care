import React, { useState, ChangeEvent } from 'react';
import Button from './Button';
import Input from './Input';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (appointmentData: { date: string; time: string; illness: string; symptoms: string; patientLocation: string }) => void;
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [illness, setIllness] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [patientLocation, setPatientLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'date') setDate(value);
    if (name === 'time') setTime(value);
    if (name === 'patientLocation') setPatientLocation(value);
    if (name === 'illness') setIllness(value);
    if (name === 'symptoms') setSymptoms(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit({ date, time, patientLocation, illness, symptoms });
      setDate('');
      setTime('');
      setIllness('');
      setSymptoms('');
      setPatientLocation('');
      onClose();
    } catch (error) {
      console.error('Error submitting appointment:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Date"
            name="date"
            type="date"
            value={date}
            change={handleChange}
            required
          />
          <Input
            label="Time"
            name="time"
            type="time"
            value={time}
            change={handleChange}
            required
          />
          <Input
            label="Illness"
            name="illness"
            type="text"
            value={illness}
            change={handleChange}
            required
          />
          <Input
            label="Symptoms"
            name="symptoms"
            type="text"
            value={symptoms}
            change={handleChange}
            required
          />
          <Input
            label="Preferred Location"
            name="patientLocation"
            type="text"
            value={patientLocation}
            change={handleChange}
            required
          />
          <div className="flex justify-end space-x-4 mt-4">
            <Button text="Cancel" isLoading={false} action={onClose} intent="outline" size="sm" />
            <Button text="Book" isLoading={isLoading} intent="primary" size="sm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
