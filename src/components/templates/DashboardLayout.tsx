import React from 'react';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-500 opacity-100">
        {children}
      </main>
    </div>
  );
}
