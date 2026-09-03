import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { QuestionItem } from '../types';

interface AcrocanthosaurusDiagramProps {
  questions?: QuestionItem[];
  userAnswers?: Record<number, string>;
  onAnswerChange?: (questionId: number, answer: string) => void;
  checkedQuestions?: Record<number, boolean>;
  mode?: 'practice' | 'test';
  isSubmitted?: boolean;
  onCheckQuestion?: (questionId: number) => void;
  onJumpToParagraph?: (pNumber: number) => void;
  explanationLanguage?: 'en' | 'vi' | 'bilingual';
}

export const AcrocanthosaurusDiagram: React.FC<AcrocanthosaurusDiagramProps> = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-xs overflow-hidden">
      {/* Authentic Cambridge Exam Booklet Frame */}
      <div className="p-4 sm:p-6 relative select-text">
        {/* Zoom button */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={() => setIsZoomed(true)}
            title="Enlarge diagram"
            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors shadow-2xs cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Centered Exam Title */}
        <h4 className="text-center font-bold text-slate-900 text-base sm:text-lg tracking-tight mb-3">
          A model of an acrocanthosaurus
        </h4>

        {/* Central Dinosaur Illustration */}
        <div className="border border-slate-200 rounded-xl p-3 sm:p-5 bg-slate-50/50 flex items-center justify-center">
          <img
            src="/assets/acrocanthosaurus.svg"
            alt="A model of an acrocanthosaurus diagram"
            className="w-full max-w-xl h-auto object-contain max-h-[340px] drop-shadow-2xs"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Enlarged Diagram Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                A model of an acrocanthosaurus
              </h3>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-center p-4 bg-slate-50 rounded-xl">
              <img
                src="/assets/acrocanthosaurus.svg"
                alt="Enlarged Acrocanthosaurus diagram"
                className="w-full max-w-2xl h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
