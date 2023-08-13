import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EventForm from './EventForm';

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const generateEvents = () => {
    return events.map(event => ({
      title: event.title,
      start: `${event.startDate}T${event.startTime}`,
      end: `${event.endDate}T${event.endTime}`,
      color: event.color,
    }));
  };

  return (
    <div>
      <EventForm addEvent={addEvent} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={generateEvents()}
      />
    </div>
  );
};

export default CalendarComponent;
