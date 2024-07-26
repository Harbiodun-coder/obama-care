import Layout from '@/components/layout/DoctorLayout';
import React, { useState, useEffect } from 'react';

interface Patient {
  name: string;
  dateOfVisit: string;
  
}

interface PatientsTableProps {
  doctorId: string;
}

const PatientsTable: React.FC<PatientsTableProps> = ({ doctorId }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    
    const fetchPatients = async () => {
      try {
        const response = await fetch(`/mockPatient.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatients(data.patients);
      } catch (error) {
        console.error('Failed to fetch patients', error);
      }
    };

    fetchPatients();
  }, [doctorId]);

  return (
    <Layout>
    <div className="overflow-x-auto mt-4 border border-[white] rounded-lg shadow-md p-0 w-full">
    <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <table className="min-w-full bg-white border border-[white]">
        <thead className="bg-[white] border-b">
          <tr>
            <th className="py-2 px-4 text-left text-sm md:text-base  font-extrabold">Patient Name</th>
            <th className="py-2 px-4 text-left text-sm md:text-base  font-extrabold">Date of Visit</th>
           
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan={2} className="py-2 px-4 text-center text-gray-500 text-sm md:text-base">
                No patients attended
              </td>
            </tr>
          ) : (
            patients.map((patient, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 text-sm md:text-base ">{patient.name}</td>
                <td className="py-2 px-4 text-sm md:text-base ">{patient.dateOfVisit}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default PatientsTable;
