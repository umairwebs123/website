import React, { useState } from 'react';
import { X, CheckCircle2, DollarSign, Award, Users, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GetInvolvedProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetInvolvedModal: React.FC<GetInvolvedProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'membership' | 'sponsor'>('membership');
  
  // Membership Form state
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateProfession, setCandidateProfession] = useState('');
  const [candidateMotivation, setCandidateMotivation] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidatePhone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Clean Candidate state
      setCandidateName('');
      setCandidatePhone('');
      setCandidateProfession('');
      setCandidateMotivation('');
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl text-left flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-500 flex items-center">
                  <Heart className="w-3.5 h-3.5 mr-1 text-pink-500 fill-pink-500" />
                  Collective Service
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-indigo-950 dark:text-white mt-1">
                  Join Inner Wheel Sahiwal
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Filters */}
            <div className="flex border-b border-slate-100 dark:border-slate-850 bg-slate-50 dark:bg-slate-950">
              <button
                onClick={() => { setActiveTab('membership'); setSuccess(false); }}
                className={`flex-1 py-4 text-center text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  activeTab === 'membership'
                    ? 'border-indigo-600 text-indigo-600 dark:border-amber-400 dark:text-amber-400 bg-white dark:bg-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-amber-400'
                }`}
              >
                Apply for Member
              </button>
              <button
                onClick={() => { setActiveTab('sponsor'); setSuccess(false); }}
                className={`flex-1 py-4 text-center text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  activeTab === 'sponsor'
                    ? 'border-indigo-600 text-indigo-600 dark:border-amber-400 dark:text-amber-400 bg-white dark:bg-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-amber-400'
                }`}
              >
                Charity Sponsorship
              </button>
            </div>

            {/* Modal Main Content (Scrollable) */}
            <div className="p-6 overflow-y-auto flex-1">
              {success ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                  <h4 className="text-lg font-extrabold text-indigo-950 dark:text-white">
                    Application Logged Securely
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you. The Sahiwal Membership Committee will review your details. We will request a face-to-face meet during our next executive assembly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Resubmit form
                  </button>
                </div>
              ) : activeTab === 'membership' ? (
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-relaxed bg-indigo-50/50 dark:bg-slate-850 p-3 rounded-xl border border-indigo-100/50 dark:border-slate-800">
                    <strong>Requirements:</strong> Inner Wheel encourages professional women with a dedicated mindset of social empathy. Regular presence at monthly meetings inside Sahiwal is highly valued.
                  </div>

                  {/* Name value */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="candidate-name" className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                      Applicant Name *
                    </label>
                    <input
                      id="candidate-name"
                      type="text"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      placeholder="e.g. Dr. Sana Jameel"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="candidate-phone" className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                        Phone contact *
                      </label>
                      <input
                        id="candidate-phone"
                        type="tel"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        placeholder="e.g. +92 300 1234567"
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label htmlFor="candidate-profession" className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                        Profession / Calling
                      </label>
                      <input
                        id="candidate-profession"
                        type="text"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        placeholder="e.g. Clinical Pharmacist"
                        value={candidateProfession}
                        onChange={(e) => setCandidateProfession(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="candidate-motivation" className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                      Why do you wish to join Inner Wheel?
                    </label>
                    <textarea
                      id="candidate-motivation"
                      rows={3}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      placeholder="Share a short summary of how you wish to spend volunteering hours..."
                      value={candidateMotivation}
                      onChange={(e) => setCandidateMotivation(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 mt-4 text-xs font-extrabold uppercase tracking-widest rounded-lg bg-indigo-650 hover:bg-indigo-700 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-slate-950 shadow-md flex items-center justify-center cursor-pointer"
                  >
                    {loading ? 'Logging Entry...' : 'Register Candidate Info'}
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start space-x-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 p-4 rounded-2xl">
                    <DollarSign className="w-8 h-8 text-emerald-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        100% Audit-Verified Philanthropy
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                        Inner Wheel Sahiwal runs exclusively on voluntary contributions. No membership fee or local donation goes toward administrative overhead.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <span className="text-xs font-bold tracking-wider text-indigo-950 dark:text-white uppercase block">
                      Direct Bank Transfer Details:
                    </span>
                    
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 text-xs sm:text-sm font-mono space-y-2 text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="text-slate-400 font-bold block text-[10px]">BANK ASSOCIATION</span>
                        <span className="font-semibold text-slate-900 dark:text-white">Bank Alfalah Ltd, Sahiwal Branch</span>
                      </div>
                      <div className="pt-2 border-t border-slate-200/50 dark:border-slate-850">
                        <span className="text-slate-400 font-bold block text-[10px]">ACCOUNT TITLE</span>
                        <span className="font-semibold text-slate-900 dark:text-white">INNER WHEEL CLUB SAHIWAL</span>
                      </div>
                      <div className="pt-2 border-t border-slate-200/50 dark:border-slate-850">
                        <span className="text-slate-400 font-bold block text-[10px]">IBAN NUMBER</span>
                        <span className="font-semibold text-indigo-650 dark:text-amber-400 font-bold tracking-wide">PK89ALFH034200192837465</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-indigo-50/40 dark:bg-slate-850 rounded-xl border border-indigo-150/50 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-440 leading-relaxed">
                      Please mail transfer snapshots directly to <strong>contact@innerwheelclubsahiwal.org</strong> to gather official tax-deductible receipt vouchers.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-bold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-705 dark:text-white rounded-full transition-colors cursor-pointer"
              >
                Close Portal
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
