import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

interface FilterSectionProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  threshold: number;
  onThresholdChange: (threshold: number) => void;
}

export function FilterSection({
  selectedYear,
  onYearChange,
  threshold,
  onThresholdChange,
}: FilterSectionProps) {
  const years = [2022, 2023, 2024];

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm mb-6 dark:bg-slate-900/80 dark:border-slate-800 dark:shadow-slate-900/50 transition-all duration-300">
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Filter by Year</label>
        <div className="flex space-x-2">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? 'primary' : 'outline'}
              onClick={() => onYearChange(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2 max-w-xs w-full">
        <label htmlFor="threshold" className="text-sm font-medium text-gray-700 dark:text-slate-300">
          Minimum Sales Threshold
        </label>
        <div className="relative group">
          <span className="absolute left-3 top-2.5 text-gray-500 transition-colors group-focus-within:text-blue-500 dark:text-slate-400">$</span>
          <Input
            id="threshold"
            type="number"
            min="0"
            className="pl-7"
            value={threshold || ''}
            onChange={(e) => onThresholdChange(Number(e.target.value))}
            placeholder="e.g. 25000"
          />
        </div>
      </div>
    </div>
  );
}
