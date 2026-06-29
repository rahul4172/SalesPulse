"use client";

import React from 'react';
import { SalesData, ChartType } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/atoms/Card';
import { ChartTitle } from '@/components/atoms/ChartTitle';
import { ChartSwitcher } from '@/components/molecules/ChartSwitcher';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from 'next-themes';

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57', '#f2c14e', '#f58231'];

export function SalesChart({ data, chartType, onChartTypeChange }: SalesChartProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const gridColor = isDark ? '#334155' : '#E5E7EB';
  const axisColor = isDark ? '#94a3b8' : '#6B7280';
  const tooltipStyle = {
    backgroundColor: isDark ? '#1e293b' : '#ffffff',
    borderColor: isDark ? '#334155' : '#e2e8f0',
    color: isDark ? '#f8fafc' : '#0f172a',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
  };

  const renderChart = () => {
    if (data.length === 0) {
      return (
        <div className="flex h-full items-center justify-center text-gray-500">
          No data available for the selected filters.
        </div>
      );
    }

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis dataKey="month" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                cursor={{ fill: isDark ? '#334155' : '#F3F4F6' }}
                contentStyle={tooltipStyle}
              />
              <Legend wrapperStyle={{ color: axisColor }} />
              <Bar dataKey="sales" name="Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis dataKey="month" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: axisColor }} />
              <Line type="monotone" dataKey="sales" name="Sales" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="sales"
                nameKey="month"
                label={(props: any) => `${props.name || props.month} ${(props.percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: axisColor }} />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="col-span-4 h-[500px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <ChartTitle>Monthly Sales Overview</ChartTitle>
        <ChartSwitcher activeChart={chartType} onChange={onChartTypeChange} />
      </CardHeader>
      <CardContent className="flex-1 min-h-0 pb-6">
        {renderChart()}
      </CardContent>
    </Card>
  );
}
