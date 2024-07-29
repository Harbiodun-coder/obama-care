import Layout from '@/components/layout/DoctorLayout';
import React, { useState, useEffect } from 'react';

interface Patient {
  name: string;
  dateOfVisit: string;
  phoneNumber: string;
  address: string;
  lastVisit: string;
  lastTreatment: string;
  image: string;
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
      <div className="md:mt-4 w-full">
        <h1 className="text-2xl font-bold mb-4 ">Patients</h1>
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200 table-fixed">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-2 md:px-4 text-left text-xs md:text-sm font-bold text-gray-700">Patient</th>
             
              <th className="hidden md:table-cell py-2 px-2 md:px-4 text-left text-xs md:text-sm font-bold text-gray-700">Phone Number</th>
              <th className="hidden lg:table-cell py-2 px-2 md:px-4 text-left text-xs md:text-sm font-bold text-gray-700">Address</th>
              <th className="hidden lg:table-cell py-2 px-2 md:px-4 text-left text-xs md:text-sm font-bold text-gray-700">Last Visit</th>
              <th className=" xl:table-cell py-2 px-2 md:px-4 text-left text-xs md:text-sm font-bold text-gray-700">Last Treatment</th>
            </tr>
          </thead>
          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-2 px-2 md:px-4 text-center text-gray-500 text-xs md:text-sm">
                  No patients attended
                </td>
              </tr>
            ) : (
              patients.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-50">
                 
                  <td className="py-2 px-2 md:px-4 text-xs md:text-sm text-gray-700 flex items-center">
                    <img src={patient.image} alt={patient.name} className="w-8 h-8 rounded-full mr-2" />
                    <span className="truncate">{patient.name}</span>
                  </td>
                  
                  <td className="hidden md:table-cell py-2 px-2 md:px-4 text-xs md:text-sm text-gray-700">{patient.phoneNumber}</td>
                  <td className="hidden lg:table-cell py-2 px-2 md:px-4 text-xs md:text-sm text-gray-700">{patient.address}</td>
                  <td className="hidden lg:table-cell py-2 px-2 md:px-4 text-xs md:text-sm text-gray-700">{patient.lastVisit}</td>
                  <td className=" xl:table-cell py-2 px-2 md:px-4 text-xs md:text-sm text-gray-700">{patient.lastTreatment}</td>
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
