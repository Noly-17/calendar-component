import { useState, useEffect } from 'react';
import { DAYS, MONTH, YEARS } from '../constants';

const useDatePickerHooks = ({ handleDateSelect }) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [showView, setShowView] = useState(DAYS);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    if (handleDateSelect) handleDateSelect(selectedDate);
  }, [selectedDate]);

  const updateDate = (year, month, day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const handleNextMonth = () => {
    if (showView === DAYS) {
      if (currentMonth < 11) {
        setCurrentMonth(currentMonth + 1);
      } else {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
        setSelectedYear(currentYear + 1);
      }
    } else if (showView === MONTH) {
      setCurrentYear(currentYear + 1);
      setSelectedYear(currentYear + 1);
    } else if (showView === YEARS) {
      setCurrentYear(currentYear + 10);
      setSelectedYear(currentYear + 10);
    }
  };

  const handleToggleMonthSelector = () => {
    setShowView((currentView) => {
      if (currentView === DAYS) {
        return MONTH;
      } else if (currentView === MONTH) {
        return YEARS;
      } else {
        return DAYS;
      }
    });
  };

  const handlePrevMonth = () => {
    if (showView === DAYS) {
      if (currentMonth > 0) {
        setCurrentMonth(currentMonth - 1);
      } else {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
        setSelectedYear(currentYear - 1);
      }
    } else if (showView === MONTH) {
      setCurrentYear(currentYear - 1);
      setSelectedYear(currentYear - 1);
    } else if (showView === YEARS) {
      setCurrentYear(currentYear - 10);
      setSelectedYear(currentYear - 10);
    }
  };

  const handleMonthSelect = (newMonth) => {
    setCurrentMonth(newMonth);
    setSelectedYear(currentYear);
    setShowView(DAYS);
  };

  const handleYearSelect = (year) => {
    setShowView(MONTH);
    setCurrentYear(year);
    setSelectedYear(year);
  };

  return {
    selectedDate,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    showView,
    setShowView,
    selectedYear,
    setSelectedYear,
    handlePrevMonth,
    handleNextMonth,
    updateDate,
    handleToggleMonthSelector,
    handleMonthSelect,
    handleYearSelect,
  };
};

export default useDatePickerHooks;
