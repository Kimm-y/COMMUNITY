import React, { useState } from 'react';
import './Event.css'; // You can define your own CSS for styling

const Calendar = () => {
  // Example events
  const initialEvents = [
    { date: '2024-03-10', title: 'Meeting' },
    { date: '2024-03-15', title: 'Birthday Party' },
    { date: '2024-03-20', title: 'Conference' },
  ];

  const [events, setEvents] = useState(initialEvents);

  // Function to render events on the calendar
  const renderEvents = (date) => {
    const eventList = events
      .filter((event) => event.date === date)
      .map((event, index) => (
        <div key={index} className="event">
          {event.title}
        </div>
      ));
    return eventList;
  };

  // Function to generate calendar days
  const generateCalendar = () => {
    const calendar = [];
    const currentDate = new Date();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${i}`;
      calendar.push(
        <div key={i} className="day">
          <span className="date">{i}</span>
          {renderEvents(date)}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <div className="header">March 2024</div>
      <div className="days">{generateCalendar()}</div>
    <div className='event'>{renderEvents}</div>
    </div>
  );
};

export default Calendar;
