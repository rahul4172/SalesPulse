import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatCard({ title, value, subtitle, icon: Icon, trend = 'neutral' }: StatCardProps) {
  return (
    <Card className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 dark:hover:shadow-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-slate-400">{title}</CardTitle>
        <Icon className="h-5 w-5 text-gray-400 dark:text-slate-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-slate-100">{value}</div>
        {subtitle && (
          <p className={`text-xs mt-1 ${trend === 'up' ? 'text-green-600 dark:text-green-400' : trend === 'down' ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-slate-400'}`}>
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
