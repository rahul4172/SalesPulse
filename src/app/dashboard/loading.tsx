import React from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { Skeleton } from '@/components/atoms/Skeleton';

export default function DashboardLoading() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-gray-200 dark:border-slate-800 mb-8">
        <div>
          <Skeleton className="h-9 w-64 mb-2" />
          <Skeleton className="h-5 w-96" />
        </div>
        <div className="mt-4 md:mt-0">
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-28 w-full rounded-xl" />
        ))}
      </div>

      <Skeleton className="h-24 w-full rounded-xl mb-6" />
      
      <Skeleton className="h-[500px] w-full rounded-xl mb-8" />
    </DashboardLayout>
  );
}
