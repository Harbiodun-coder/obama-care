import Layout from "@/components/layout/PatientLayout";
import AppointmentList from "@/components/shared/AppointmentList";
import BookAppointmentModal from "@/components/shared/BookAppointmentModal";
import Button from "@/components/shared/Button";
import React, { useState } from "react";

export default function Appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitAppointment = (appointmentData: {
    date: string;
    time: string;
    illness: string;
    symptoms: string;
  }) => {
    console.log("Appointment Data:", appointmentData);
  };

  return (
    <Layout>
      <div className="container mx-auto md:p-4">
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
