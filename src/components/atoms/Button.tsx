import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm dark:bg-blue-500 dark:hover:bg-blue-600',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
