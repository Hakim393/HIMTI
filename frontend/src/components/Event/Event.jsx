import React, { useState } from "react";

const Event = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = {
    "2024-07-04": "INI ADALAH EVENT LITBANG !",
    "2024-12-25": "INI ADALAH EVENT LITBANG !",
    "2024-11-28": "INI ADALAH EVENT LITBANG !",
    "2024-01-01": "INI ADALAH EVENT LITBANG !",
    "2024-01-31": "INI ADALAH EVENT LITBANG !",
  };

  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const firstDayOfMonth = (month, year) => new Date(year, month - 1, 1).getDay();

  const renderCalendar = () => {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= days; day++) {
      const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      calendar.push(
        <div
          key={day}
          className={`p-2 border ${events[date] ? 'bg-blue-200 cursor-pointer' : ''}`}
          onClick={() => events[date] && setSelectedEvent({ date, description: events[date] })}
        >
          <div>{day}</div>
          {events[date] && <div className="text-xs">{events[date]}</div>}
        </div>
      );
    }

    return calendar;
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + direction));
    setCurrentDate(newDate);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="bg-[#a5c2fe] p-10 rounded-3xl border-8 border-white w-full max-w-7xl mx-5">
        <div className="flex justify-between items-center mb-5">
          <button onClick={() => changeMonth(-1)} className="bg-white text-black px-3 py-1 rounded">Prev</button>
          <h1 className="text-xl">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h1>
          <button onClick={() => changeMonth(1)} className="bg-white text-black px-3 py-1 rounded">Next</button>
        </div>
        <div className="grid grid-cols-7 gap-4">
          <div className="font-bold">Sun</div>
          <div className="font-bold">Mon</div>
          <div className="font-bold">Tue</div>
          <div className="font-bold">Wed</div>
          <div className="font-bold">Thu</div>
          <div className="font-bold">Fri</div>
          <div className="font-bold">Sat</div>
          {renderCalendar()}
        </div>
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-lg font-bold mb-2">Event Details</h2>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
