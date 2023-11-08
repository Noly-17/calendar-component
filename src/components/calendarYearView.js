import React from 'react';

const CalendarYearView = ({
  generateYears,
  selectedYear,
  handleYearSelect,
}) => {
  const years = generateYears(selectedYear);

  return (
    <div>
      <div className="grid grid-cols-4 grid-row-3 gap-2 mt-2">
        {years.map((year, index) => (
          <div
            key={year}
            className={`cursor-pointer p-2 w-[50px] h-[50px] rounded-full ${
              index === 0 || index === years.length - 1
                ? 'text-gray-300 pointer-events-none'
                : year === selectedYear
                ? 'bg-red-500 text-white'
                : ''
            }`}
            onClick={() => {
              if (index !== 0 && index !== years.length - 1) {
                handleYearSelect(year);
              }
            }}
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarYearView;
