import React from 'react';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-text">{label}</label>
      )}
      <input
        className={clsx(
          'focus-ring rounded border border-border px-3 py-2',
          'bg-bg text-text placeholder:text-text-muted',
          error && 'border-danger',
          className
        )}
        {...props}
      />
      {error && <span className="text-sm text-danger">{error}</span>}
    </div>
  );
}
