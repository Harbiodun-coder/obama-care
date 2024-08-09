import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Layout from '@/components/layout/DoctorLayout';
import Calendar from '@/components/card/Calender';
import Cards from '@/components/card/Cards';

interface AppointmentProps {
  approved: string;
  illness: string;
  paid: boolean;
  patient_email: string;
  patient_location: string;
  patient_name: string;
  patient_phone: string;
  selected_date: string;
  status: string;
  symptoms: string[];
}

const Doctor: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('obamacare');
      if (!token) {
        console.error('Token not found');
        return;
      }

      try {
        const appointmentsResponse = await fetch('api/doctor/dashboard', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!appointmentsResponse.ok) {
          throw new Error('Failed to fetch appointments');
        }

        const data = await appointmentsResponse.json();
        console.log('Fetched Data:', data);

        setAppointments(data.data.appointments || []);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAppointmentClick = (appointment: AppointmentProps) => {
    Swal.fire({
      title: 'Appointment Details',
      html: `
        <p><strong>Patient:</strong> ${appointment.patient_name}</p>
        <p><strong>Date:</strong> ${appointment.selected_date}</p>
        <p><strong>Time:</strong> ${appointment.selected_date}</p>
        <p><strong>Location:</strong> ${appointment.patient_location}</p>
        <p><strong>Illness:</strong> ${appointment.illness}</p>
        <p><strong>Symptoms:</strong> ${appointment.symptoms.join(', ')}</p>
        <p><strong>Phone:</strong> ${appointment.patient_phone}</p>
        <p><strong>Email:</strong> ${appointment.patient_email}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Approve',
      cancelButtonText: 'Decline',
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        handleApprove(appointment);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        handleDecline(appointment);
      }
    });
  };

  const handleApprove = (appointment: AppointmentProps) => {
    
    console.log('Approved:', appointment);
  };

  const handleDecline = (appointment: AppointmentProps) => {
   
    console.log('Declined:', appointment);
  };

 

  return (
    <Layout>
      <div className='w-full h-full p-6'>
        <div className="md:grid grid-cols-4 gap-6 flex flex-col w-full">
          <div className='md:col-span-3 w-full flex flex-col gap-6'>
            <Cards />
            <div className='flex flex-col gap-6'>
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-lg border border-gray-200 rounded-lg flex flex-col gap-4 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleAppointmentClick(appointment)}
                >
                  <h3 className="text-2xl font-semibold text-gray-800">{appointment.patient_name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-lg font-semibold">{appointment.patient_name[0]}</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-medium text-gray-600">Location: {appointment.patient_location}</p>
                      <p className="text-lg font-medium text-gray-600">Illness: {appointment.illness}</p>
                      <p className="text-lg font-medium text-gray-600">Symptoms: {appointment.symptoms.join(', ')}</p>
                      <p className="text-lg font-medium text-gray-600">Date: {appointment.selected_date}</p>
                      <p className="text-lg font-medium text-gray-600">Phone: {appointment.patient_phone}</p>
                      <p className="text-lg font-medium text-gray-600">Email: {appointment.patient_email}</p>
                      <p className="text-lg font-medium text-gray-600">Status: {appointment.status === "0" ? "Pending" : "Completed"}</p>
                      <p className="text-lg font-medium text-gray-600">Payment Status: {appointment.paid ? "Paid" : "Unpaid"}</p>
                      <p className="text-lg font-medium text-gray-600">Approval Status: {appointment.approved}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-6">
            <Calendar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctor;
