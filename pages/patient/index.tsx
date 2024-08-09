import Layout from "@/components/layout/PatientLayout";
import BookAppointmentModal from "@/components/shared/BookAppointmentModal";
import Button from "@/components/shared/Button";
import React, { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchProfile = async () => {
    const token = localStorage.getItem("obamacare");
    if (!token) {
      console.error("Token not found");
      return;
    }
    try {
      const response = await fetch("/api/patient/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }
      const data = await response.json();
      console.log("Fetched data:", data);

      setProfile(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching profile...");
    fetchProfile();
  }, []);

  const handleSubmitAppointment = async (appointmentData) => {
    console.log("Appointment Data:", appointmentData);
    const token = localStorage.getItem("obamacare");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch("/api/patient/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      Swal.fire({
        title: "Success",
        text: "Appointment booked succesful",
        icon: "success",
        confirmButtonText: "OK",
      });

      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto md:p-4 scrollbar-hidden">
        <div className="flex md:justify-between md:items-center mb-8 gap-10 ">
          <div className="">
            <img src="/staffs.jpg" alt="" className="w-[40%] h-[40%] rounded-full" />
            <div className="md:text-2xl md:font-semibold text-[11px] font-normal ">
              Welcome {profile?.first_name} {profile?.last_name}
            </div>
          </div>

          
            <Button
              intent="primary"
              size="sm"
              text={"Book Appointment"}
              isLoading={false}
              type="button"
              action={handleOpenModal}
            />
         
        </div>
        <div
        className="bg-white p-4 shadow-md cursor-pointer border border-[#EDEDED] rounded-lg flex flex-col items-start gap-2"
        onClick={handleOpenModal}
      >
        <div className="flex items-center gap-2 mb-2">
          <FaCalendarCheck className="text-2xl text-[#0065C2]" />
          <div className="font-semibold text-xl md:text-2xl">Appointment</div>
        </div>
        <div className="text-left">
          <p className="font-medium text-sm md:text-base text-[#BABABA]">Patient Name: </p>
          <p className="font-medium text-sm md:text-base text-[#BABABA]">Date: </p>
          <p className="font-medium text-sm md:text-base text-[#BABABA]">Time: </p>
        </div>
      </div>
        <BookAppointmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitAppointment}
        />
      </div>
    </Layout>
  );
}
