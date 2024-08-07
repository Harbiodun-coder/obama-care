import Layout from "@/components/layout/PatientLayout";
import AppointmentList from "@/components/shared/AppointmentList";
import BookAppointmentModal from "@/components/shared/BookAppointmentModal";
import Button from "@/components/shared/Button";
import React, { useState } from "react";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitAppointment = async (appointmentData) => {
    console.log("Appointment Data:", appointmentData);
    const token = localStorage.getItem('obamacare');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await fetch('/api/patient/appointment', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API Response:', data);

    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto md:p-4 scrollbar-hidden">
        <div className="flex md:justify-between md:items-center mb-8 gap-10 ">
          <div className="md:text-2xl md:font-semibold text-[11px] font-normal ">Welcome Matthew,</div>

          <div className="">
            <Button
              intent="primary"
              size="sm"
              text={"Book Appointment"}
              isLoading={false}
              type="button"
              action={handleOpenModal}
            />
          </div>
        </div>
        <AppointmentList />
        <BookAppointmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitAppointment}
        />
      </div>
    </Layout>
  );
}
