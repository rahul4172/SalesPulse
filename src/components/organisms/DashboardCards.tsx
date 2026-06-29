import React from 'react';
import { DashboardStats } from '@/types';
import { StatCard } from '@/components/molecules/StatCard';
import { DollarSign, TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface DashboardCardsProps {
  stats: DashboardStats;
}

export function DashboardCards({ stats }: DashboardCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <StatCard
        title="Total Sales"
        value={`$${stats.totalSales.toLocaleString()}`}
        icon={DollarSign}
      />
      <StatCard
        title="Average Sales"
        value={`$${stats.averageSales.toLocaleString()}`}
        icon={Activity}
      />
      <StatCard
        title="Highest Month"
        value={stats.highestMonth ? `$${stats.highestMonth.sales.toLocaleString()}` : '-'}
        subtitle={stats.highestMonth ? `In ${stats.highestMonth.month}` : ''}
        icon={TrendingUp}
        trend="up"
      />
      <StatCard
        title="Lowest Month"
        value={stats.lowestMonth ? `$${stats.lowestMonth.sales.toLocaleString()}` : '-'}
        subtitle={stats.lowestMonth ? `In ${stats.lowestMonth.month}` : ''}
        icon={TrendingDown}
        trend="down"
      />
    </div>
  );
}
