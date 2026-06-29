"use client";

import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { DashboardHeader } from '@/components/organisms/DashboardHeader';
import { DashboardCards } from '@/components/organisms/DashboardCards';
import { FilterSection } from '@/components/molecules/FilterSection';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/atoms/Skeleton';
import { useSalesFilter } from '@/hooks/useSalesFilter';

const SalesChart = dynamic(
  () => import('@/components/organisms/SalesChart').then((mod) => mod.SalesChart),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full rounded-xl" /> }
);
import { getSalesData } from '@/lib/salesService';
import { SalesData, ChartType } from '@/types';

export default function DashboardPage() {
  const [initialData, setInitialData] = useState<SalesData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeChart, setActiveChart] = useState<ChartType>('bar');

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getSalesData();
        setInitialData(data);
      } catch (error) {
        console.error('Failed to load sales data', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const {
    selectedYear,
    setSelectedYear,
    threshold,
    setThreshold,
    filteredData,
    stats,
  } = useSalesFilter(initialData);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-lg font-medium text-gray-500 animate-pulse">Loading dashboard data...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardHeader />
      
      <DashboardCards stats={stats} />
      
      <FilterSection
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        threshold={threshold}
        onThresholdChange={setThreshold}
      />
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        <SalesChart 
          data={filteredData} 
          chartType={activeChart}
          onChartTypeChange={setActiveChart}
        />
      </div>

      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Analytics Dashboard. All rights reserved.</p>
      </footer>
    </DashboardLayout>
  );
}
