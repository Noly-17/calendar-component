import React from 'react';

const CalendarMonthView = ({ monthNames, currentMonth, handleMonthSelect }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8 mt-2 w-full">
        {monthNames.map((month, index) => (
          <div
            key={month}
            className={`cursor-pointer w-[50px] h-[50px] rounded-full p-3 ${
              currentMonth === index && 'bg-red-500 text-white'
            }`}
            onClick={() => handleMonthSelect(index)}
          >
            {month.slice(0, 3)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMonthView;
