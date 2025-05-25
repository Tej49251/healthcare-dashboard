import React, { useState } from 'react';
import {
  Home, Clock, Calendar, ClipboardList, BarChart,
  MessageCircle, Settings, User, Menu
} from 'lucide-react';

const generalNavItems = [
  { label: 'Dashboard', icon: <Home size={20} /> },
  { label: 'History', icon: <Clock size={20} /> },
  { label: 'Calendar', icon: <Calendar size={20} /> },
  { label: 'Appointments', icon: <ClipboardList size={20} /> },
  { label: 'Statistics', icon: <BarChart size={20} /> },
];

const toolsNavItems = [
  { label: 'Chat', icon: <MessageCircle size={20} /> },
  { label: 'Support', icon: <User size={20} /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Toggle state for mobile sidebar

  return (
    <div className={`w-64 min-h-screen bg-[#f5f9ff] px-5 py-6 flex flex-col transition-all duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-64"} sm:translate-x-0`}>

      {/* Brand & Sidebar Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex font-roboto text-2xl font-bold whitespace-nowrap">
          <span className="text-[#26ffe9]">Health</span>
          <span className="text-[#000068]">care.</span>
        </h1>

        {/* Mobile Toggle Button */}
        <button 
          className="sm:hidden p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={22} className="text-blue-800" />
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 space-y-8 overflow-y-auto max-h-screen">

        {/* General Navigation */}
        <div>
          <h2 className="text-xs font-semibold text-gray-300 mb-2 px-1">General</h2>
          <ul className="space-y-4">
            {generalNavItems.map((item, index) => (
              <li
                key={index}
                className="ml-3 flex font-bold items-center gap-4 text-gray-600 hover:text-blue-700 cursor-pointer transition duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Navigation */}
        <div>
          <h2 className="text-xs font-semibold text-gray-300 mb-2 px-1">Tools</h2>
          <ul className="space-y-4">
            {toolsNavItems.map((item, index) => (
              <li
                key={index}
                className="ml-3 flex font-bold items-center gap-4 text-gray-600 hover:text-blue-700 cursor-pointer transition duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Settings Link */}
      <div className="py-4 mt-auto">
        <li className="flex font-bold items-center gap-3 text-gray-600 hover:text-blue-700 cursor-pointer transition duration-200">
          <Settings size={20} />
          <span>Settings</span>
        </li>
      </div>
    </div>
  );
}
