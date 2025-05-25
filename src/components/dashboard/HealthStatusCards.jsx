import React from 'react';

// Card data: Each item represents a health status with title, date, color, progress, and icon
const cards = [
  { title: 'Lungs', date: '20 May 2025', color: 'bg-green-500', progress: 85, icon: 'lungs.png' },
  { title: 'Teeth', date: '18 May 2025', color: 'bg-yellow-500', progress: 70, icon: 'teeth.png' },
  { title: 'Bone', date: '15 May 2025', color: 'bg-green-500', progress: 100, icon: 'bone.png' },
];

export default function HealthStatusCards() {
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-4 pl-2">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-[#f5f9ff] rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-lg"
        >
          {/* Card Header: Icon and Title */}
          <div className="flex flex-row items-center w-full">
            <img src={card.icon} alt={card.title} className="w-12 h-12 mb-2 mr-3" />
            <h4 className="text-blue-800 font-bold text-lg">{card.title}</h4>
          </div>

          {/* Date Text */}
          <p className="text-sm text-gray-500 mb-2">{card.date}</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className={`h-2.5 rounded-full ${card.color}`}
              style={{ width: `${card.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
