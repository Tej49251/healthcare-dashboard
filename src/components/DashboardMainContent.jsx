import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import ActivityFeed from './dashboard/ActivityFeed';
import CalendarView from './dashboard/CalendarView';
import { Search, Bell } from 'lucide-react';

export default function DashboardMainContent() {
  return (
    <main className="min-h-screen grid grid-cols-[43%_55%] gap-6 bg-white !m-0 !p-0">
      
      {/* Left Panel: Main Dashboard Content */}
      <section className="w-full space-y-6 p-4 bg-white">
        
        {/* Top Bar: Search & Notification */}
        <div className="flex items-center justify-between mb-6 gap-4">
          
          {/* Search Input */}
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md border border-gray-200 w-full max-w-md">
            <Search className="text-gray-500 mr-3" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-800"
            />
          </div>

          {/* Notification Bell Icon */}
          <div className="p-3 rounded-lg bg-white shadow-md border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
            <Bell className="text-blue-800" size={22} />
          </div>
        </div>

        {/* Page Header & Time Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="font-roboto text-3xl sm:text-4xl font-bold text-blue-800">
            Dashboard
          </h1>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-800 mt-2 sm:mt-0">
            <span>This Week</span>
            <span>▽</span>
          </div>
        </div>

        {/* Body: Anatomy + Health Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          <AnatomySection />
          <HealthStatusCards />
        </div>

        {/* Link to Health Details */}
        <div className="text-xs font-semibold text-blue-800 mt-auto flex gap-1 justify-end">
          <span>Details</span>
          <span>→</span>
        </div>

        {/* Recent Health Activities */}
        <ActivityFeed />
      </section>

      {/* Right Panel: Calendar View */}
      <section className="w-full bg-[#f5f9ff] p-4 shadow-md rounded-lg">
        <CalendarView />
      </section>
    </main>
  );
}
