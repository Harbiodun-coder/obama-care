import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/PatientLayout';
import { FaDownload, FaPrint } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

interface MedicalRecord {
  id: number;
  date: string;
  type: string;
  description: string;
  details: string;
}

const MedicalHistory: React.FC = () => {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const response = await fetch('/medical.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch medical records');
        }

        const data = await response.json();
        setMedicalRecords(data.medicalRecords); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalRecords();
  }, []);

  const downloadRecords = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Medical History', 14, 22);

    doc.setFontSize(12);
    medicalRecords.forEach((record, index) => {
      doc.text(`Type: ${record.type}`, 14, 30 + (index * 60));
      doc.text(`Date: ${record.date}`, 14, 36 + (index * 60));
      doc.text(`Description: ${record.description}`, 14, 42 + (index * 60));
      doc.text(`Details: ${record.details}`, 14, 48 + (index * 60));
      doc.text('----------------------------------', 14, 54 + (index * 60));
    });

    doc.save('medical_history.pdf');
  };

  const printRecords = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow?.document.write('<html><head><title>Medical History</title>');
    printWindow?.document.write('<style>body { font-family: Arial, sans-serif; margin: 20px; } h1, h2, h3 { color: #333; } p { color: #666; }</style>');
    printWindow?.document.write('</head><body >');
    printWindow?.document.write('<h1>Medical History</h1>');
    medicalRecords.forEach(record => {
      printWindow?.document.write(`<h2>${record.type}</h2>`);
      printWindow?.document.write(`<p><strong>Date:</strong> ${record.date}</p>`);
      printWindow?.document.write(`<p><strong>Description:</strong> ${record.description}</p>`);
      printWindow?.document.write(`<p><strong>Details:</strong> ${record.details}</p>`);
      printWindow?.document.write('<hr>');
    });
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  };

  const handleRecordClick = (id: number) => {
    setSelectedRecord(id === selectedRecord ? null : id);
  };

 

  return (
    <Layout>
      <div className="bg-white p-4 shadow rounded w-full">
      <div className="container  py-4 flex justify-between  items-center">
          <Link href="/patient" className="text-blue-600 hover:underline">
            <IoMdArrowRoundBack className="w-[100px] " />
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Medical History</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
         
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              onClick={downloadRecords}
              className="bg-[#0065C2] text-white px-4 py-2 rounded flex items-center w-full sm:w-auto"
            >
              <FaDownload className="mr-2" /> Download
            </button>
            <button
              onClick={printRecords}
              className="bg-gray-600 text-white px-4 py-2 rounded flex items-center w-full sm:w-auto"
            >
              <FaPrint className="mr-2" /> Print
            </button>
          </div>
        </div>

        <ul>
          {medicalRecords.map(record => (
            <li
              key={record.id}
              className="border-b border-gray-300 pb-4 mb-4 cursor-pointer"
              onClick={() => handleRecordClick(record.id)}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{record.type}</h3>
                  <p className="text-gray-600">{record.date}</p>
                  <p className="text-gray-700 mt-1">{record.description}</p>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-blue-600 hover:underline">
                    {selectedRecord === record.id ? 'Hide Details' : 'Show Details'}
                  </span>
                </div>
              </div>
              {selectedRecord === record.id && (
                <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
                  <h4 className="text-lg font-semibold">Details:</h4>
                  <p>{record.details}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default MedicalHistory;
