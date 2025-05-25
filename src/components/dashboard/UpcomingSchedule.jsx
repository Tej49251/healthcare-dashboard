import React from "react";

// Weekly schedule data with appointment details
const schedule = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health Checkup", time: "09:00 AM", img: "/injection.png" },
      { title: "Ophthalmologist", time: "11:00 AM", img: "/eye.png" },
    ],
  },
  {
    day: "On Sunday",
    appointments: [
      { title: "Cardiologist", time: "01:00 PM", img: "red-heart.png" },
      { title: "Neurologist", time: "03:00 PM", img: "neurologist.png" },
    ],
  },
];

// Reusable card for individual appointments
const UpcomingScheduleCard = ({ title, time, img, bgColor, textColor }) => (
  <div className={`${bgColor} ${textColor} px-2 py-2 rounded-xl shadow-md flex flex-col`}>
    {/* Header: Title and Icon */}
    <div className="flex items-center justify-between w-full">
      <p className="text-sm font-semibold">{title}</p>
      <img src={img} alt={title} className="w-15 h-10 pl-5 ml-5 object-cover object-center" />
    </div>

    {/* Time Info */}
    <div className="flex flex-col items-start mt-1">
      <p className="text-xs opacity-80">{time}</p>
    </div>
  </div>
);

// Main component rendering schedule grouped by day
export default function UpcomingSchedule() {
  return (
    <div className="bg-[#f5f9ff] p-2 rounded-lg">
      {/* Section Heading */}
      <h3 className="text-xl text-blue-800 font-bold mb-4">The Upcoming Schedule</h3>

      {/* Render schedule for each day */}
      {schedule.map((daySchedule, index) => (
        <div key={index} className="mb-4">
          {/* Day label */}
          <h4 className="text-s text-gray-500 mb-2">{daySchedule.day}</h4>

          {/* Appointment cards for that day */}
          <div className="flex flex-col sm:flex-row gap-3">
            {daySchedule.appointments.map((appt, idx) => (
              <UpcomingScheduleCard
                key={idx}
                title={appt.title}
                time={appt.time}
                img={appt.img}
                bgColor="bg-violet-100"
                textColor="text-gray-800"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
