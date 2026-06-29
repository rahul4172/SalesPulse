import { SalesData } from '@/types';
import { mockSalesData } from '@/data/salesData';

/**
 * Service layer to fetch sales data. 
 * This is currently using mock data, but can be easily swapped with 
 * a real API call (e.g., fetch('https://example.com/api/sales')).
 */
export async function getSalesData(): Promise<SalesData[]> {
  // Simulate network delay to make it realistic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSalesData);
    }, 500);
  });
}
