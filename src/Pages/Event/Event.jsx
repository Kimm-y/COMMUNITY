import React, { useState } from 'react';
import './Event.css'; 

const Calendar = () => {

  const initialEvents = [
    { date: '2024-03-10', title: 'Meeting' },
    { date: '2024-03-15', title: 'Birthday Party' },
    { date: '2024-03-20', title: 'Conference' },
  ];

  const [events, setEvents] = useState(initialEvents);


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
    <div className='event'>{renderEvents}
    <p>date: '2024-03-15', title: 'Visit to Royal Home Orphanage organized by Afrika Tikkun'</p>
    <p>date: '2024-03-21', title: 'planting trees at Karura, all are welcome'</p>
    <p>date: '2024-03-30', title: 'charity drive, all food and clothes donations will be transported and distributed by Kenya Red Cross'</p>
    </div>
    </div>
  );
};

export default Calendar;
