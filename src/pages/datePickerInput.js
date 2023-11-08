import React, { useState, useEffect } from 'react';
import DatePicker from './datePicker';

const DatePickerInput = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const dateStr = e.target.value;
    setSelectedDate(dateStr ? new Date(dateStr) : null);
  };

  const formatDateToISOString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  console.log(selectedDate);

  return (
    <div className="relative">
      <input
        value={selectedDate ? formatDateToISOString(selectedDate) : ''}
        onChange={handleInputChange}
        onClick={toggleCalendar}
        className="pl-10 pr-2 py-2 w-48 rounded border border-gray-300"
      />
      <span
        className="absolute left-2 top-2 cursor-pointer"
        onClick={toggleCalendar}
      >
        📅
      </span>

      {showCalendar && (
        <DatePicker
          handleDateSelect={handleDateSelect}
          toggleCalendar={toggleCalendar}
        />
      )}
    </div>
  );
};

export default DatePickerInput;
