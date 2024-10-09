import React from 'react';

const Calendar = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-0">Calendar</h1>
        <nav className="text-blue-400 text-sm md:text-base">
          <span className="hover:text-blue-600 cursor-pointer">Dashboard</span> / <span className="hover:text-blue-600 cursor-pointer">Calendar</span>
        </nav>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4">
        {/* Days of the week */}
        {days.map((day, index) => (
          <div key={index} className="text-center bg-blue-600 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-base">
            {day}
          </div>
        ))}

        {/* Dates */}
        {dates.map((date, index) => (
          <div key={index} className="relative p-1 sm:p-2 h-20 sm:h-24 border border-gray-700 rounded-md">
            <span className="absolute top-2 left-2 text-xs sm:text-lg">{date}</span>

            {/* Events for specific dates */}
            {date === 1 && (
              <div className="absolute bottom-2 left-2 bg-gray-800 text-xs sm:text-sm px-1 sm:px-2 py-1 rounded-md">
                <p>Redesign Website</p>
                <p className="text-gray-400">1 Dec - 2 Dec</p>
              </div>
            )}

            {date === 25 && (
              <div className="absolute bottom-2 left-2 bg-gray-800 text-xs sm:text-sm px-1 sm:px-2 py-1 rounded-md">
                <p>App Design</p>
                <p className="text-gray-400">25 Dec - 27 Dec</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
