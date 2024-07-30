import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Layout from "@/components/layout/PatientLayout";
import { FaCalendarAlt, FaHeartbeat, FaProcedures, FaTint, FaUserMd } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Aerobics",
      data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Yoga",
      data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Meditation",
      data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Activity Growth",
    },
  },
};

const appointments = [
  {
    date: "August 14, 2021",
    doctor: "Dr. Samuel",
    type: "Consultation",
  },
  {
    date: "August 21, 2021",
    doctor: "Dr. Matthew",
    type: "Follow-up",
  },
  {
    date: "August 28, 2021",
    doctor: "Dr. Abiodun",
    type: "Routine Check-up",
  },
];

const Dashboard: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold">Health Overview</h1>
          <p className="text-sm text-gray-500">{currentDate}</p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <FaTint className="text-blue-500 text-3xl" />
            <div>
              <h2 className="text-xl font-medium">Blood Sugar</h2>
              <p className="text-4xl">
                80 <span className="text-sm">mg/dL</span>
              </p>
              <p className="text-sm text-green-500">Normal</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <FaHeartbeat className="text-red-500 text-3xl" />
            <div>
              <h2 className="text-xl font-medium">Heart Rate</h2>
              <p className="text-4xl">
                98 <span className="text-sm">bpm</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <FaProcedures className="text-green-500 text-3xl" />
            <div>
              <h2 className="text-xl font-medium">Blood Pressure</h2>
              <p className="text-4xl">
                102 <span className="text-sm">/ 72 mmHg</span>
              </p>
              <p className="text-sm text-green-500">Normal</p>
            </div>
          </div>
        </section>
        <section className="bg-white p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-medium">Activity Growth</h2>
          <div className="w-full h-64">
            <Bar data={data} options={options} />
          </div>
        </section>
        <section className="bg-white p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-medium">Upcoming Appointments</h2>
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="mt-2 p-2 border rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0"
            >
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-gray-500" />
                <span className="text-sm md:text-base">{appointment.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserMd className="text-gray-500" />
                <span className="text-sm md:text-base">
                  {appointment.type} with {appointment.doctor}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
