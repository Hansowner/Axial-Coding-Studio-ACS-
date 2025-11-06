import { useState, useRef } from 'react';
import type { ReactNode, MouseEvent } from 'react';

export interface LassoProps {
  children: ReactNode;
  onSelect: (bounds: { x: number; y: number; width: number; height: number }) => void;
}

export function Lasso({ children, onSelect }: LassoProps) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setIsSelecting(true);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setStart({ x, y });
    setCurrent({ x, y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isSelecting) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setCurrent({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseUp = () => {
    if (isSelecting) {
      const bounds = {
        x: Math.min(start.x, current.x),
        y: Math.min(start.y, current.y),
        width: Math.abs(current.x - start.x),
        height: Math.abs(current.y - start.y),
      };
      onSelect(bounds);
    }
    setIsSelecting(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
      {isSelecting && (
        <div
          className="absolute border-2 border-primary bg-primary bg-opacity-20"
          style={{
            left: Math.min(start.x, current.x),
            top: Math.min(start.y, current.y),
            width: Math.abs(current.x - start.x),
            height: Math.abs(current.y - start.y),
          }}
        />
      )}
    </div>
  );
}
