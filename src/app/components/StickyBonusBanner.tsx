import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StickyBonusBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#3D5A80] to-[#5B7FA8] shadow-2xl border-t-4 border-[#1c1832]"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Content */}
              <div className="flex items-center gap-4 flex-1">
                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/20 rounded-full flex-shrink-0">
                  <Gift className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-white font-black text-sm sm:text-base mb-1 uppercase">
                    🎁 BONUS: up to 1500£ + 300FS
                  </div>
                  <div className="text-white/90 text-xs sm:text-sm uppercase">
                    Limited time offer
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <a
                  href="https://bestslotgames.top/rqNgNZ7R"
                  rel="nofollow"
                  target="_blank"
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-[#2B2D42] font-black text-sm rounded-md transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2 shadow-lg uppercase"
                >
                  CLAIM WIN
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setIsClosed(true)}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="Close banner"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}