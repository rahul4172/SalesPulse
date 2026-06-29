import React from 'react';
import { Button } from '@/components/atoms/Button';
import { ChartType } from '@/types';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

interface ChartSwitcherProps {
  activeChart: ChartType;
  onChange: (type: ChartType) => void;
}

export function ChartSwitcher({ activeChart, onChange }: ChartSwitcherProps) {
  return (
    <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-lg border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
      <Button
        variant={activeChart === 'bar' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onChange('bar')}
        className="px-3"
      >
        <BarChart3 className="w-4 h-4 mr-2" />
        Bar
      </Button>
      <Button
        variant={activeChart === 'line' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onChange('line')}
        className="px-3"
      >
        <LineChart className="w-4 h-4 mr-2" />
        Line
      </Button>
      <Button
        variant={activeChart === 'pie' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onChange('pie')}
        className="px-3"
      >
        <PieChart className="w-4 h-4 mr-2" />
        Pie
      </Button>
    </div>
  );
}
