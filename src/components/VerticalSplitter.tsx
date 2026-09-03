import React, { useState, useEffect, useRef } from 'react';
import {
  GripVertical,
  RotateCcw,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Columns
} from 'lucide-react';

interface VerticalSplitterProps {
  splitRatio: number; // percentage, e.g. 52 (25 to 75)
  onSplitRatioChange: (newRatio: number) => void;
  containerRef: React.RefObject<HTMLElement | null>;
  minRatio?: number;
  maxRatio?: number;
  defaultRatio?: number;
  leftLabel?: string;
  rightLabel?: string;
}

export const VerticalSplitter: React.FC<VerticalSplitterProps> = ({
  splitRatio,
  onSplitRatioChange,
  containerRef,
  minRatio = 25,
  maxRatio = 75,
  defaultRatio = 52,
  leftLabel = 'Passage',
  rightLabel = 'Questions'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const splitterRef = useRef<HTMLDivElement>(null);

  // Handle pointer drag (mouse or touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to main button
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    try {
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    } catch {
      // Ignore in non-browser environments
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width <= 0) return;

      const currentX = e.clientX - rect.left;
      const rawPercent = (currentX / rect.width) * 100;
      const clamped = Math.min(maxRatio, Math.max(minRatio, rawPercent));
      onSplitRatioChange(Math.round(clamped * 10) / 10);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      try {
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
      } catch {
        // Ignore
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      try {
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
      } catch {
        // Ignore
      }
    };
  }, [isDragging, containerRef, minRatio, maxRatio, onSplitRatioChange]);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 5 : 2;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onSplitRatioChange(Math.max(minRatio, Math.round((splitRatio - step) * 10) / 10));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onSplitRatioChange(Math.min(maxRatio, Math.round((splitRatio + step) * 10) / 10));
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSplitRatioChange(minRatio);
    } else if (e.key === 'End') {
      e.preventDefault();
      onSplitRatioChange(maxRatio);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSplitRatioChange(defaultRatio);
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSplitRatioChange(defaultRatio);
  };

  const leftPercentDisplay = Math.round(splitRatio);
  const rightPercentDisplay = 100 - leftPercentDisplay;

  return (
    <div
      ref={splitterRef}
      role="separator"
      tabIndex={0}
      aria-orientation="vertical"
      aria-valuenow={splitRatio}
      aria-valuemin={minRatio}
      aria-valuemax={maxRatio}
      aria-label="Resize panels divider"
      onPointerDown={handlePointerDown}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowPresets(false);
      }}
      className={`group relative hidden lg:flex flex-col items-center justify-center w-4 shrink-0 self-stretch cursor-col-resize select-none outline-none z-30 transition-all ${
        isDragging ? 'cursor-col-resize' : ''
      }`}
      title="Click and drag to resize panels • Double-click to reset (50:50) • Use ← / → keys"
    >
      {/* Visual Guide Line */}
      <div
        className={`w-1 h-full rounded-full transition-all duration-150 ${
          isDragging
            ? 'bg-blue-600 shadow-md ring-2 ring-blue-300 w-1.5'
            : isHovered
            ? 'bg-blue-400 w-1.5'
            : 'bg-slate-200/90 group-hover:bg-blue-300'
        }`}
      />

      {/* Center Grip Handle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-6 h-14 rounded-full border shadow-sm transition-all duration-150 ${
          isDragging
            ? 'bg-blue-600 border-blue-700 text-white scale-110 shadow-lg ring-4 ring-blue-100'
            : isHovered
            ? 'bg-white border-blue-400 text-blue-600 scale-105 shadow-md'
            : 'bg-white border-slate-300 text-slate-400 hover:text-slate-600'
        }`}
      >
        <GripVertical className="w-3.5 h-3.5" />
      </div>

      {/* Floating Ratio Tooltip (Visible when dragging or hovering) */}
      {(isDragging || isHovered) && (
        <div
          className={`absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto z-40 transition-opacity duration-150 ${
            isDragging ? 'opacity-100 scale-105' : 'opacity-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-lg border border-slate-700 whitespace-nowrap flex items-center gap-1.5 tracking-tight backdrop-blur-sm">
            <span className="text-blue-300">{leftLabel} {leftPercentDisplay}%</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-300">{rightLabel} {rightPercentDisplay}%</span>
          </div>

          {/* Quick preset action buttons */}
          <div className="mt-1.5 flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-lg border border-slate-200 shadow-md text-[10px]">
            <button
              onClick={() => onSplitRatioChange(50)}
              title="Balanced 50/50"
              className={`px-1.5 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                leftPercentDisplay === 50
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              50:50
            </button>
            <button
              onClick={() => onSplitRatioChange(60)}
              title="Passage focus (60/40)"
              className={`px-1.5 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                leftPercentDisplay === 60
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              60:40
            </button>
            <button
              onClick={() => onSplitRatioChange(40)}
              title="Questions focus (40/60)"
              className={`px-1.5 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                leftPercentDisplay === 40
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              40:60
            </button>
            <button
              onClick={() => onSplitRatioChange(defaultRatio)}
              title="Reset to default (52:48)"
              className="p-1 rounded text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
