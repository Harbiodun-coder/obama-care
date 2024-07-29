import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div className="bg-white p-4 shadow-md border border-[#EDEDED] rounded-lg">
      <div className="text-lg font-semibold mb-4">Calendar</div>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className=""
        tileClassName=""
      />
    </div>
  );
};

export default CustomCalendar;
