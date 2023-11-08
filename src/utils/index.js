export const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

export const generateYears = (currentYear) => {
  const startYear = currentYear - 1;
  return Array.from({ length: 12 }, (_, i) => startYear + i);
};

export const daysInMonthArray = (selectedYear, currentMonth) =>
  Array.from(
    { length: getDaysInMonth(selectedYear, currentMonth) },
    (_, i) => i + 1
  );
