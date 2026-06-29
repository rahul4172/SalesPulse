export interface SalesData {
  year: number;
  month: string;
  sales: number;
}

export type ChartType = 'bar' | 'line' | 'pie';

export interface DashboardStats {
  totalSales: number;
  highestMonth: { month: string; sales: number } | null;
  lowestMonth: { month: string; sales: number } | null;
  averageSales: number;
}
