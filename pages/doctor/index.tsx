import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/DoctorLayout";
import Calendar from "@/components/card/Calender";
import Card from "@/components/card/Card";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

interface ApiResponse {
  appointments: AppointmentProps[];
  patients: number;
}

const Doctor: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [patients, setPatients] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("obamacare");
      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const appointmentsResponse = await fetch("api/doctor/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!appointmentsResponse.ok) {
          throw new Error("Failed to fetch appointments");
        }

        const data = await appointmentsResponse.json();
        console.log("Fetched Data:", data);

        setAppointments(data.data.appointments || []);
        setPatients(data.data.patients || 0);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApprove = (appointment: AppointmentProps) => {
    toast.success(`You approved the appointment with ${appointment.patient_name}`);
  };

  const handleDecline = (appointment: AppointmentProps) => {
    toast.error(`You declined the appointment with ${appointment.patient_name}`);
  };

  return (
    <Layout>
      <div className="w-full h-full p-6">
        <div className="md:grid grid-cols-4 gap-6 flex flex-col w-full">
          <div className="md:col-span-3 w-full flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <Card number={patients} text="Patients" intent="patients" />
              <Card
                number={appointments.length}
                text="Appointments"
                intent="appointments"
              />
              <Card
                number={200}
                text="Consultations"
                intent="consultations"
              />
            </div>
            <div className="flex flex-col gap-6 md:w-auto">
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-lg border border-gray-200 rounded-lg flex flex-col gap-4 hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src="/patient.png"
                        alt=""
                        className="w-[50px] h-[50px] rounded-full"
                      />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {appointment.patient_name}
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      <FaCheck
                        className="text-green-500 cursor-pointer"
                        onClick={() => handleApprove(appointment)}
                      />
                      <FaTimes
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDecline(appointment)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-medium text-gray-600">
                      Location: {appointment.patient_location}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Illness: {appointment.illness}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Symptoms: {appointment.symptoms.join(", ")}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Date: {appointment.selected_date}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Phone: {appointment.patient_phone}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Email: {appointment.patient_email}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Status:{" "}
                      {appointment.status === "0" ? "Pending" : "Completed"}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Payment Status: {appointment.paid ? "Paid" : "Unpaid"}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      Approval Status: {appointment.approved}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-6">
            <Calendar />
          </div>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Doctor;
