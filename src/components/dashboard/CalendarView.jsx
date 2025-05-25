import React from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import UpcomingSchedule from "./UpcomingSchedule";

// Renders a row for days or dates
const CalendarRow = ({ items, itemClass }) => (
  <div className="grid grid-cols-7 text-center gap-1">
    {items.map((item, i) => (
      <div key={i} className={`py-2 text-xs font-medium ${itemClass(item, i)}`}>
        {item}
      </div>
    ))}
  </div>
);

// Renders individual appointment card
const AppointmentCard = ({ title, time, doctor, image, bgColor, textColor }) => (
  <div className={`p-3 rounded-xl shadow-md flex flex-col gap-2 ${bgColor} ${textColor}`}>
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold">{title}</p>
      <img src={image} alt={title} className="w-7 h-7 rounded-full object-cover" />
    </div>
    <div className="text-xs opacity-80 leading-tight">
      <p>{time}</p>
      <p>{doctor}</p>
    </div>
  </div>
);

export default function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const timeRows = [9, 10, 11];

  return (
    <div className="bg-[#f5f9ff] pr-6 w-full max-w-5xl mx-auto flex flex-col gap-5">

      {/* Top right avatar and add button */}
      <div className="flex items-center justify-end gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#26ffe9]">
          <img src="/profile.png" alt="User Profile" className="w-full h-full object-cover" />
        </div>
        <button className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
          <Plus size={18} />
        </button>
      </div>

      {/* Calendar header with month and navigation */}
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold text-gray-800">October 2021</h3>
        <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <ChevronLeft size={18} />
          <ChevronRight size={18} />
        </div>
      </div>

      {/* Weekdays */}
      <CalendarRow
        items={days}
        itemClass={(item) =>
          `text-xs font-semibold text-blue-900 ${item === "Tue" ? "bg-gray-200 rounded-md px-1" : ""}`
        }
      />

      {/* Calendar dates */}
      <CalendarRow
        items={dates}
        itemClass={(item) =>
          `text-sm font-bold ${item === 31 ? "text-gray-500 bg-gray-100 rounded-md px-1" : "text-blue-900"}`
        }
      />

      {/* Time slots grid */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-xs text-gray-600">
        {Array.from({ length: 3 }).map((_, rowIndex) =>
          dates.map((date, colIndex) => {
            const hour = timeRows[rowIndex];
            const isTuesday = date === 26;
            const isGraySlot = [29, 30].includes(date) && hour === 9;
            const isMissingTime = [29, 28, 27].includes(date) && rowIndex === 2;
            const isDotSlot = date === 28 && hour === 10;

            const slotText = isMissingTime ? "--" : isDotSlot ? "10:00 •" : `${hour}:00`;

            const slotStyle = isTuesday
              ? "bg-gray-100 text-gray-800"
              : isGraySlot
              ? "bg-gray-300 text-gray-700"
              : isMissingTime
              ? "bg-gray-200 text-gray-500"
              : isDotSlot
              ? "bg-gray-300 text-gray-700"
              : "";

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`py-2 rounded-md ${slotStyle}`}
              >
                {slotText}
              </div>
            );
          })
        )}
      </div>

      {/* Appointments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AppointmentCard
          title="Dentist"
          time="09:00 - 10:00"
          doctor="Dr. Cameron Williamson"
          image="/teeth.png"
          bgColor="bg-indigo-600"
          textColor="text-white"
        />
        <AppointmentCard
          title="Physiotherapy Appointment"
          time="11:00 AM"
          doctor="Dr. Alex"
          image="/bone.png"
          bgColor="bg-violet-100"
          textColor="text-gray-800"
        />
      </div>

      {/* Upcoming schedule component */}
      <UpcomingSchedule />
    </div>
  );
}
