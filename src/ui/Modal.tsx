import { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className={clsx(
        'rounded-lg border border-border bg-bg p-6 shadow-lg backdrop:bg-black backdrop:bg-opacity-50',
        {
          'w-full max-w-md': size === 'sm',
          'w-full max-w-2xl': size === 'md',
          'w-full max-w-4xl': size === 'lg',
        }
      )}
      onClose={onClose}
    >
      {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}
      {children}
    </dialog>
  );
}
