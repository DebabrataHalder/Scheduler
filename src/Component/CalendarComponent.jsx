import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventForm from './EventForm';
import Navbar from './Navbar';


const CalendarComponent = () => {

  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const generateEvents = () => {
    return events.map(event => ({
      title: event.title,
      start: `${event.startDate}T${event.startTime}`,
      end: `${event.startDate}T${event.endTime}`,
    }));
  };

  return (
    <div>
      <Navbar/>
      <div className='flex flex-row w-screen h-screen '>
        
        <div className='w-3/12 rounded-md bg-blue-200  '>
        <EventForm addEvent={addEvent} />
        </div>
        <div className='w-full h-screen m-4'>
        <FullCalendar
          plugins={[dayGridPlugin,timeGridPlugin]}
          initialView="dayGridMonth"
          events={generateEvents()}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          slotDuration="00:07:30"
          slotMinTime="09:00:00" 
            slotMaxTime="17:00:00"
        />
        </div>
        
      </div>
    </div>

  );
};

export default CalendarComponent;





