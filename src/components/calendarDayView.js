import React from 'react';

const CalendarDayView = ({
  selectedYear,
  currentMonth,
  getDaysInMonth,
  daysInMonthArray,
  selectedDate,
  updateDate,
}) => {
  const daysInMonth = daysInMonthArray(selectedYear, currentMonth);
  const firstDay = new Date(selectedYear, currentMonth, 1).getDay();
  const currentDate = new Date();

  const emptyStartCells = firstDay;
  const totalCells = 7 * 6;
  const emptyEndCells = totalCells - (daysInMonth.length + emptyStartCells);

  return (
    <div>
      <div className="grid grid-cols-7 grid-rows-6 gap-2 mt-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="font-bold text-center">
            {day}
          </div>
        ))}

        {Array.from({ length: emptyStartCells }, (_, i) => (
          <div
            key={`empty-start-${i}`}
            className="text-center cursor-pointer p-2 text-gray-300 pointer-events-none"
          >
            {getDaysInMonth(selectedYear, currentMonth - 1) -
              emptyStartCells +
              i +
              1}
          </div>
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`text-center w-[40px] cursor-pointer p-2 ${
              selectedDate.toDateString() ===
              new Date(selectedYear, currentMonth, day).toDateString()
                ? 'bg-red-500 rounded-full text-white'
                : currentDate.getDate() === day &&
                  currentDate.getMonth() === currentMonth
                ? 'text-red-500'
                : ''
            }`}
            onClick={() => {
              updateDate(selectedYear, currentMonth, day);
            }}
          >
            {day}
          </div>
        ))}

        {Array.from({ length: emptyEndCells }, (_, i) => (
          <div
            key={`empty-end-${i}`}
            className="text-center cursor-pointer p-2 text-gray-300 pointer-events-none"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDayView;
