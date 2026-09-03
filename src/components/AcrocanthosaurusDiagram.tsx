import React, { useState, useRef } from 'react';
import {
  Maximize2,
  Upload,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { QuestionItem } from '../types';

interface AcrocanthosaurusDiagramProps {
  questions: QuestionItem[];
  userAnswers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
  checkedQuestions: Record<number, boolean>;
  mode: 'practice' | 'test';
  isSubmitted: boolean;
  onCheckQuestion?: (questionId: number) => void;
  onJumpToParagraph: (pNumber: number) => void;
  explanationLanguage: 'en' | 'vi' | 'bilingual';
}

const STORAGE_KEY_CUSTOM_IMAGE = 'ielts_p1_4_custom_diagram_image';

export const AcrocanthosaurusDiagram: React.FC<AcrocanthosaurusDiagramProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  checkedQuestions,
  mode,
  isSubmitted,
  onCheckQuestion,
  onJumpToParagraph,
  explanationLanguage
}) => {
  const [customImage, setCustomImage] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEY_CUSTOM_IMAGE);
  });
  const [isZoomed, setIsZoomed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const q7 = questions.find((q) => q.id === 7);
  const q8 = questions.find((q) => q.id === 8);
  const q9 = questions.find((q) => q.id === 9);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomImage(result);
        try {
          localStorage.setItem(STORAGE_KEY_CUSTOM_IMAGE, result);
        } catch {
          // LocalStorage quota warning handled silently
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setCustomImage(null);
    localStorage.removeItem(STORAGE_KEY_CUSTOM_IMAGE);
  };

  const getWordCount = (val: string) => val.trim() ? val.trim().split(/\s+/).length : 0;

  const renderStatusBadge = (q?: QuestionItem) => {
    if (!q) return null;
    const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
    if (!isChecked) return null;

    const ans = (userAnswers[q.id] || '').trim().toLowerCase();
    const isCorrect = q.acceptedAnswers.some(
      (a) => a.toLowerCase().trim() === ans
    );

    return isCorrect ? (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">
        <CheckCircle2 className="w-3 h-3" /> Correct
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded border border-rose-300">
        <XCircle className="w-3 h-3" /> Ans: {q.officialAnswer}
      </span>
    );
  };

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-sm overflow-hidden">
      {/* Header bar with controls */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
            7-9
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Original Exam Diagram</span>
              <span className="text-[11px] font-normal text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                A model of an acrocanthosaurus
              </span>
            </h4>
            <p className="text-[11px] text-slate-500">
              Interactive test booklet reproduction • Type answers directly on diagram or in cards below
            </p>
          </div>
        </div>

        {/* View Mode & Upload Controls */}
        <div className="flex items-center gap-2">
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            title="Upload your scanned image file (e.g., image (3).png) from your device"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors shadow-2xs cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-blue-600" />
            <span>{customImage ? 'Replace Image' : 'Upload Scan'}</span>
          </button>

          {customImage && (
            <button
              onClick={handleResetImage}
              title="Reset back to default vector diagram"
              className="px-2 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-rose-50 text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
            >
              Reset
            </button>
          )}

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            title="Toggle Expanded View"
            className="p-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="p-4 sm:p-6 bg-[#fcfcfc] relative select-text">
        {/* Authentic Cambridge Exam Booklet Frame */}
        <div className="border border-slate-800 rounded-lg p-4 sm:p-6 bg-white shadow-2xs relative">
          {/* Centered Exam Title */}
          <h3 className="text-center font-bold text-slate-900 text-base sm:text-xl tracking-tight mb-4 font-sans">
            A model of an acrocanthosaurus
          </h3>

          {/* Top Row: Q7 (Left) and Q8 (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-2">
            {/* Question 7: Spines / Sail Box */}
            <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-300 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-100/90 px-2 py-0.5 rounded">
                  Label 7 • Dorsal Spines
                </span>
                {renderStatusBadge(q7)}
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                Dinosaur's name comes from spines.
                <br />
                One theory: they were necessary to hold up a
              </p>
              
              {/* Interactive Input 7 on Diagram */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <div className="relative flex-1">
                  <input
                    id="diagram-input-7"
                    type="text"
                    value={userAnswers[7] || ''}
                    onChange={(e) => onAnswerChange(7, e.target.value)}
                    placeholder="....................."
                    className={`w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border font-medium transition-all ${
                      (checkedQuestions[7] || (isSubmitted && mode === 'test'))
                        ? q7?.acceptedAnswers.some((a) => a.toLowerCase() === (userAnswers[7] || '').trim().toLowerCase())
                          ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-200'
                          : 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-200'
                        : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                    }`}
                  />
                  {getWordCount(userAnswers[7] || '') > 1 && (
                    <span className="absolute right-2 top-2 text-[10px] text-rose-600 font-bold bg-rose-50 px-1 rounded">
                      Max 1 word!
                    </span>
                  )}
                </div>
                {mode === 'practice' && onCheckQuestion && !checkedQuestions[7] && !isSubmitted && (
                  <button
                    onClick={() => onCheckQuestion(7)}
                    className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
                  >
                    Check
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-800 font-sans">
                which helped control body heat.
              </p>
            </div>

            {/* Question 8: Skull Box */}
            <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-300 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-100/90 px-2 py-0.5 rounded">
                  Label 8 • Skull Size
                </span>
                {renderStatusBadge(q8)}
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                Skull is
              </p>

              {/* Interactive Input 8 on Diagram */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <div className="relative flex-1">
                  <input
                    id="diagram-input-8"
                    type="text"
                    value={userAnswers[8] || ''}
                    onChange={(e) => onAnswerChange(8, e.target.value)}
                    placeholder="....................."
                    className={`w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border font-medium transition-all ${
                      (checkedQuestions[8] || (isSubmitted && mode === 'test'))
                        ? q8?.acceptedAnswers.some((a) => a.toLowerCase() === (userAnswers[8] || '').trim().toLowerCase())
                          ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-200'
                          : 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-200'
                        : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                    }`}
                  />
                  {getWordCount(userAnswers[8] || '') > 1 && (
                    <span className="absolute right-2 top-2 text-[10px] text-rose-600 font-bold bg-rose-50 px-1 rounded">
                      Max 1 word!
                    </span>
                  )}
                </div>
                {mode === 'practice' && onCheckQuestion && !checkedQuestions[8] && !isSubmitted && (
                  <button
                    onClick={() => onCheckQuestion(8)}
                    className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
                  >
                    Check
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-800 font-sans">
                compared with rest of body.
              </p>
            </div>
          </div>

          {/* Central Dinosaur Illustration Container */}
          <div className="my-3 py-2 flex flex-col items-center justify-center relative min-h-[260px] sm:min-h-[320px]">
            {customImage ? (
              <div className="w-full max-w-2xl relative rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
                <img
                  src={customImage}
                  alt="Original scanned diagram of Acrocanthosaurus"
                  className="w-full h-auto object-contain max-h-[380px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-xs">
                  User Uploaded Scan
                </div>
              </div>
            ) : (
              <div className="w-full max-w-2xl flex items-center justify-center">
                <img
                  src="/assets/acrocanthosaurus.svg"
                  alt="A model of an acrocanthosaurus diagram with spines, narrow skull, tail and muscular legs"
                  className="w-full h-auto object-contain max-h-[360px] drop-shadow-2xs"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Bottom Row: Q9 (Left) */}
          <div className="max-w-md p-3.5 rounded-xl bg-slate-50/90 border border-slate-300 space-y-2 mt-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-blue-900 bg-blue-100/90 px-2 py-0.5 rounded">
                Label 9 • Wide Tail & Leg Muscles
              </span>
              {renderStatusBadge(q9)}
            </div>

            {/* Interactive Input 9 on Diagram */}
            <div className="flex items-center gap-2 pt-0.5">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                9
              </span>
              <div className="relative flex-1">
                <input
                  id="diagram-input-9"
                  type="text"
                  value={userAnswers[9] || ''}
                  onChange={(e) => onAnswerChange(9, e.target.value)}
                  placeholder="....................."
                  className={`w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border font-medium transition-all ${
                    (checkedQuestions[9] || (isSubmitted && mode === 'test'))
                      ? q9?.acceptedAnswers.some((a) => a.toLowerCase() === (userAnswers[9] || '').trim().toLowerCase())
                        ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-200'
                        : 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-200'
                      : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                  }`}
                />
                {getWordCount(userAnswers[9] || '') > 1 && (
                  <span className="absolute right-2 top-2 text-[10px] text-rose-600 font-bold bg-rose-50 px-1 rounded">
                    Max 1 word!
                  </span>
                )}
              </div>
              {mode === 'practice' && onCheckQuestion && !checkedQuestions[9] && !isSubmitted && (
                <button
                  onClick={() => onCheckQuestion(9)}
                  className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
                >
                  Check
                </button>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              made easier by wide tail and highly developed muscles in legs.
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-slate-900 text-lg">
                Cambridge IELTS Test Diagram: A model of an acrocanthosaurus
              </h3>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="flex justify-center p-4 bg-slate-50 rounded-xl">
              <img
                src={customImage || '/assets/acrocanthosaurus.svg'}
                alt="Enlarged Acrocanthosaurus diagram"
                className="w-full max-w-3xl h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
