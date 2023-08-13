import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [color, setColor] = useState('#006400'); // Default color

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && startDate && endDate && startTime && endTime) {
      addEvent({ title, startDate, endDate, startTime, endTime });
      setTitle('');
      setStartDate('');
      setEndDate('');
      setStartTime('');
      setEndTime('');
      setColor('#006400'); // Reset color after adding event
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <label>
        Start Time:
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </label>
      <label>
        End Time:
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
