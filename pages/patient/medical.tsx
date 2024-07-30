import Layout from '@/components/layout/PatientLayout';
import React, { useState } from 'react';
import { FaDownload, FaPrint } from 'react-icons/fa';

const medicalRecords = [
  {
    id: 1,
    date: '2024-07-10',
    type: 'General Checkup',
    description: 'Routine checkup with Dr. Smith.',
    details: 'Detailed notes from the visit...'
  },
  {
    id: 2,
    date: '2024-06-15',
    type: 'Follow-up',
    description: 'Follow-up visit for recent surgery.',
    details: 'Detailed notes from the visit...'
  },
  {
    id: 3,
    date: '2024-06-15',
    type: 'Follow-up',
    description: 'Follow-up visit for recent surgery.',
    details: 'Detailed notes from the visit...'
  },
  {
    id: 4,
    date: '2024-06-15',
    type: 'Follow-up',
    description: 'Follow-up visit for recent surgery.',
    details: 'Detailed notes from the visit...'
  },
];

const downloadRecords = () => {
  const blob = new Blob([JSON.stringify(medicalRecords, null, 2)], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'medical_history.pdf';
  a.click();
  URL.revokeObjectURL(url);
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

const MedicalHistory = () => {
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);

  const handleRecordClick = (id: number) => {
    setSelectedRecord(id === selectedRecord ? null : id);
  };

  return (
    <Layout>
      <div className="bg-white p-4 shadow rounded w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0 text-[#0065C2]">Medical History</h2>
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
