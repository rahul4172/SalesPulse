import { useState, useMemo } from 'react';
import { SalesData, DashboardStats } from '@/types';

export function useSalesFilter(initialData: SalesData[]) {
  const [selectedYear, setSelectedYear] = useState<number>(2022);
  const [threshold, setThreshold] = useState<number>(0);

  const filteredData = useMemo(() => {
    return initialData.filter(
      (item) => item.year === selectedYear && item.sales >= threshold
    );
  }, [initialData, selectedYear, threshold]);

  const stats: DashboardStats = useMemo(() => {
    if (filteredData.length === 0) {
      return {
        totalSales: 0,
        highestMonth: null,
        lowestMonth: null,
        averageSales: 0,
      };
    }

    let totalSales = 0;
    let highestMonth = filteredData[0];
    let lowestMonth = filteredData[0];

    filteredData.forEach((item) => {
      totalSales += item.sales;
      if (item.sales > highestMonth.sales) {
        highestMonth = item;
      }
      if (item.sales < lowestMonth.sales) {
        lowestMonth = item;
      }
    });

    const averageSales = Math.round(totalSales / filteredData.length);

    return {
      totalSales,
      highestMonth: { month: highestMonth.month, sales: highestMonth.sales },
      lowestMonth: { month: lowestMonth.month, sales: lowestMonth.sales },
      averageSales,
    };
  }, [filteredData]);

  return {
    selectedYear,
    setSelectedYear,
    threshold,
    setThreshold,
    filteredData,
    stats,
  };
}
