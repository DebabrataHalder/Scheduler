import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const CalendarComponent = () => {
   const events = [
     {
       title: 'Event 1',
       start: '2023-08-10T10:00:00',
       end: '2023-08-10T10:15:00',
       color: 'green',
     },
     {
      title: 'Darlina',
      start: '2023-08-10T10:30:00',
      end: '2023-08-10T10:45:00',
      color: 'red',
      
     }
     // Add more events here
   ];

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
         events={events}
         slotDuration="00:20:00" // Set the time slot duration
         eventTimeFormat={{
           hour: 'numeric',
           minute: '2-digit',
           omitZeroMinute: false,
           meridiem: 'short',
         }}
        eventContent={(eventInfo) => (
          <div>
            <strong>{eventInfo.timeText}</strong>
            <p>{eventInfo.event.title}</p>
          </div>
        )}
      />
    </div>
  );
};

export default CalendarComponent;