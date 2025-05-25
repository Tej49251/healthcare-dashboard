import React from 'react';

export default function ActivityFeed() {
  const activityData = [
    [30, 50, 40],  // Mon
    [25, 60, 35],  // Tue
    [45, 80, 65],  // Wed
    [20, 55, 30],  // Thu
    [40, 70, 50],  // Fri
    [30, 65, 45],  // Sat
    [35, 75, 55],  // Sun
  ].flat();

  const centerDayIndex = 2; // Highlight Wednesday bars and label

  return (
    <div className="bg-[#f5f9ff] p-2 rounded-xl shadow-md w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-md font-semibold text-blue-800">Activity</h3>
        <p className="text-xs text-gray-500">3 appointments this week</p>
      </div>

      {/* Bar Chart */}
      <div className="relative flex items-end justify-between h-16 sm:h-24 w-full overflow-hidden">
        {activityData.map((height, index) => {
          const colorVariants = ['bg-purple-400', 'bg-blue-400', 'bg-indigo-400'];
          const color = colorVariants[index % 3];
          const isCenterDay = index >= centerDayIndex * 3 && index < (centerDayIndex + 1) * 3;

          return (
            <div
              key={index}
              className={`w-[6px] sm:w-[8px] rounded-t-full mx-[1px] transition-all duration-300 ${color} ${isCenterDay ? '' : 'opacity-30'}`}
              style={{ height: `${height * 0.7}%` }}
            />
          );
        })}

        {/* Highlighted Date Label */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-center">
          <span className="bg-white shadow-md px-1 py-0.5 rounded-full font-semibold text-purple-600">
            28 Wed
          </span>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <span key={i} className={`${i === centerDayIndex ? 'text-purple-600 font-semibold' : ''}`}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}
