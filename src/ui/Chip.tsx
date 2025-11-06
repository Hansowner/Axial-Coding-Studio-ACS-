import { clsx } from 'clsx';

export interface ChipProps {
  label: string;
  color?: string;
  onRemove?: () => void;
}

export function Chip({ label, color, onRemove }: ChipProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm',
        color || 'bg-secondary text-white'
      )}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:opacity-70"
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
}
