import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/DoctorLayout";

import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<{
    attended: Array<any>;
    nonAttended: Array<any>;
  }>({
    attended: [],
    nonAttended: [],
  });

  const [filter, setFilter] = useState<"all" | "attended" | "nonAttended">(
    "all"
  );

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/mockAppointments.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAppointments({
        attended: data.attended || [],
        nonAttended: data.nonAttended || [],
      });
    } catch (error) {
      console.log("Failed to fetch appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredAppointments = () => {
    if (filter === "attended") {
      return appointments.attended;
    }
    if (filter === "nonAttended") {
      return appointments.nonAttended;
    }
    return [...appointments.attended, ...appointments.nonAttended];
  };

  return (
    <Layout>
      <div className="">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/doctor" className="text-blue-600 hover:underline">
            <IoMdArrowRoundBack className="w-[100px]" />
          </Link>
          <h1 className="text-3xl font-bold text-blue-600">Appointments</h1>
        </div>

        <div className="mb-4 flex justify-center gap-1">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 border rounded-lg ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            } transition-all duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("attended")}
            className={`px-4 py-2 border rounded-lg ${
              filter === "attended"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600 border-green-600"
            } transition-all duration-300`}
          >
            Attended
          </button>
          <button
            onClick={() => setFilter("nonAttended")}
            className={`px-4 py-2 border rounded-lg ${
              filter === "nonAttended"
                ? "bg-red-600 text-white"
                : "bg-white text-red-600 border-red-600"
            } transition-all duration-300`}
          >
            Not Attended
          </button>
        </div>

        <div className="overflow-x-auto mt-4 border border-[white] rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200 table-fixed">
            <thead className="bg-[white] text-center">
              <tr>
                <th className="py-3 px-2 text-left text-xs md:text-[16px] leading-5 font-bold text-black">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-2 text-left text-xs md:text-[16px] leading-5 font-bold text-black">
                  Patient
                </th>
                <th className="py-3 px-2 text-left text-xs md:text-[16px] leading-5 font-bold text-black">
                  Date
                </th>
                <th className="py-3 px-2 text-left text-xs md:text-[16px] leading-5 font-bold text-black">
                  Time
                </th>
                <th className="py-3 px-2 text-left text-xs md:text-[16px] leading-5 font-bold text-black w-28">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments().length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-3 px-2 text-center text-gray-500 text-xs md:text-sm"
                  >
                    No appointments available
                  </td>
                </tr>
              ) : (
                filteredAppointments().map((appointment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-2 text-xs md:text-sm text-gray-700">
                      <input type="checkbox" />
                    </td>
                    <td className="py-3 px-2 text-xs md:text-sm text-gray-700 flex items-center">
                      <img
                        src={appointment.image}
                        alt={appointment.patient}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {appointment.patient}
                    </td>
                    <td className="py-3 px-2 text-xs md:text-sm text-gray-700">
                      {appointment.date}
                    </td>
                    <td className="py-3 px-2 text-xs md:text-sm text-gray-700">
                      {appointment.time}
                    </td>
                    <td
                      className={`py-3 px-2 text-xs md:text-[14px] font-bold ${
                        appointment.status === "Attended"
                          ? "text-white bg-green-600"
                          : "text-white bg-red-600"
                      }`}
                    >
                      {appointment.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
