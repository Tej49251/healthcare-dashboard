import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import CalendarView from './components/dashboard/CalendarView';

export default function App() {
  return (
    <div className="min-h-screen w-full shadow-lg p-4">
      <div className="flex flex-col h-full w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-1 overflow-hidden">

          {/* Sidebar */}
          <aside className="hidden overflow-auto md:flex w-64  flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Middle Section */}
          <main className="flex-1 overflow-auto">
            <DashboardMainContent />
          </main>

        </div>
      </div>
    </div>
  );
}