Также добавь вот этот элемент - import { motion, AnimatePresence } from 'motion/react';
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
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl"
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
                    🎁 EXCLUSIVE BONUS: Get 150% + $300,000 ARS
                  </div>
                  <div className="text-white/90 text-xs sm:text-sm uppercase">
                    Limited time offer • New players only
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <a
                  href="#casino"
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-orange-600 font-black text-sm rounded-md transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2 shadow-lg uppercase"
                >
                  CLAIM NOW
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setIsClosed(true)}
                  className="text-white hover:text-white/80 transition-colors"
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

И третьим блоком на HOME добавь вот это, пожалуйста

import { motion } from 'motion/react';
import { Play, Gift, TrendingUp } from 'lucide-react';

export function WelcomeBonusBanner() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-xs sm:text-sm mb-4 sm:mb-6">
            <TrendingUp size={14} className="sm:w-4 sm:h-4" />
            LIMITED TIME OFFER
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-4 uppercase">
            UP TO 150% BONUS
          </h2>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 uppercase">
            + $300,000 ARS WELCOME PACKAGE
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join now and claim your exclusive welcome bonus! Play our premium
            slots and win big at the best online casinos.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-white">
              <Gift size={18} className="sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">150 Free Spins</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Play size={18} className="fill-current sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">1000+ Slots</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">Instant Payouts</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#casino"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white hover:bg-gray-100 text-orange-600 font-black text-base sm:text-lg md:text-xl rounded-md transition-all hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2 sm:gap-3 uppercase"
            >
              <Gift size={24} className="sm:w-7 sm:h-7" />
              CLAIM BONUS NOW
            </a>
            <a
              href="/slots"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-transparent hover:bg-white/10 text-white font-black text-base sm:text-lg md:text-xl rounded-md transition-all border-2 border-white inline-flex items-center justify-center gap-2 sm:gap-3 uppercase"
            >
              View All Slots
            </a>
          </div>

          {/* Terms */}
          <p className="text-xs sm:text-sm text-white/80 mt-4 sm:mt-6 uppercase">
            18+ | T&C Apply | New Players Only | Gamble Responsibly
          </p>
        </motion.div>
      </div>
    </section>
  );
}