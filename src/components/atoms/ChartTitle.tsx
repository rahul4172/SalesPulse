import React from 'react';
import { cn } from '@/lib/utils';

export function ChartTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-xl font-bold tracking-tight text-gray-900 dark:text-slate-100', className)} {...props}>
      {children}
    </h2>
  );
}
