import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');///////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && startDate && startTime && endTime) {
      addEvent({ title,
         startDate, 
          startTime,
          endTime,
          backgroundColor, });
      setTitle('');
      setStartDate('');
      setStartTime('');
      setEndTime('');
      setBackgroundColor('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >



      
        <div className='m-5'>
            <div className='mt-4'>
              <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="small-input" class=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='mt-4'>
              <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Appointment</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} id="small-input" class=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='mt-4'>
              <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
              <input  type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} id="small-input" class=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='mt-4'>
              <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
              <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}  id="small-input" class=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>





            <div className='mt-4'>
              <label htmlFor="color-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Criticality code</label>
                <select
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  id="color-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Select a color</option>
                  <option value="yellow">Yellow</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                </select>
              </div>







            <button type="submit" class=" mt-5  ml-14 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                Add appointment
            </button>

        </div>


    </form>
  );
};

export default EventForm;
