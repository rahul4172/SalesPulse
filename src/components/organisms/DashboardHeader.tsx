"use client";

import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function DashboardHeader() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-gray-200 dark:border-slate-800 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Analytics Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
          Monitor your sales performance across different time periods.
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-4">
        <Badge>Live Data Mockup</Badge>
        {mounted && (
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="w-10 h-10 p-0 rounded-full relative"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-400" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </div>
    </div>
  );
}
