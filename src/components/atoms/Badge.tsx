import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
