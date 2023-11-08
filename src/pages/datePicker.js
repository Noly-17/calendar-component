import React from 'react';
import { getDaysInMonth, generateYears, daysInMonthArray } from '../utils';
import { monthNames } from '../constants';
import NavigationHeader from '../components/navigationHeader';
import CalendarDayView from '../components/calendarDayView';
import CalendarMonthView from '../components/calendarMonthView';
import CalendarYearView from '../components/calendarYearView';
import useDatePickerHooks from '../hooks';
const DatePicker = ({ handleDateSelect, toggleCalendar }) => {
  const {
    selectedDate,
    currentMonth,
    currentYear,
    showView,
    selectedYear,
    handlePrevMonth,
    handleNextMonth,
    updateDate,
    handleToggleMonthSelector,
    handleMonthSelect,
    handleYearSelect,
  } = useDatePickerHooks({ handleDateSelect });

  const NavHeaderObj = {
    handlePrevMonth,
    handleToggleMonthSelector,
    showView,
    monthNames,
    currentMonth,
    currentYear,
    selectedYear,
    handleNextMonth,
  };

  const CalendarDayViewObj = {
    selectedYear,
    currentMonth,
    getDaysInMonth,
    daysInMonthArray,
    selectedDate,
    updateDate,
    toggleCalendar,
  };

  const CalendarMonthViewObj = {
    monthNames,
    currentMonth,
    handleMonthSelect,
  };

  const CalendarYearViewObj = {
    generateYears,
    selectedYear,
    handleYearSelect,
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg">
      <NavigationHeader {...NavHeaderObj} />
      {showView === 'DAYS' && <CalendarDayView {...CalendarDayViewObj} />}
      {showView === 'MONTH' && <CalendarMonthView {...CalendarMonthViewObj} />}
      {showView === 'YEARS' && <CalendarYearView {...CalendarYearViewObj} />}
    </div>
  );
};

export default DatePicker;
