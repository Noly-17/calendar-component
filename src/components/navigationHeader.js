import React from 'react';
import { DAYS, MONTH } from '../constants';

const NavigationHeader = ({
  handlePrevMonth,
  handleToggleMonthSelector,
  showView,
  monthNames,
  currentMonth,
  currentYear,
  selectedYear,
  handleNextMonth,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span onClick={handlePrevMonth} className="cursor-pointer font-bold">
        &lt;
      </span>
      <div
        onClick={handleToggleMonthSelector}
        className="cursor-pointer w-full hover:bg-gray-200 p-2 mx-5 rounded-md"
      >
        {showView === DAYS ? (
          <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
        ) : showView === MONTH ? (
          <span>{`${selectedYear}`}</span>
        ) : (
          <span>{`${selectedYear} - ${selectedYear + 9}`}</span>
        )}
      </div>
      <span onClick={handleNextMonth} className="cursor-pointer font-bold">
        &gt;
      </span>
    </div>
  );
};

export default NavigationHeader;
