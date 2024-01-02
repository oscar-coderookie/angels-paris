import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from "date-fns";
import "./SeasonPage.scss";

const SeasonPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  return (
    <div className="calendario-container">
      <div className="calendario-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendario-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendario-day ${isToday(day) ? 'today' : ''} ${isSameMonth(day, currentMonth) ? 'current-month' : 'other-month'}`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonPage;