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

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57', '#f2c14e', '#f58231'];

export function SalesChart({ data, chartType, onChartTypeChange }: SalesChartProps) {
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
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                cursor={{ fill: '#F3F4F6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Bar dataKey="sales" name="Sales" fill="#2563EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Line type="monotone" dataKey="sales" name="Sales" stroke="#2563EB" strokeWidth={3} activeDot={{ r: 8 }} />
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
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
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
