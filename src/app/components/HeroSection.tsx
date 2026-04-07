'use client';

import { motion } from 'motion/react';
import { Play, Trophy, Star, Zap, DollarSign, Sparkles } from 'lucide-react';
import { heroImage } from '@/assets';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0f] via-[#1c1832] to-[#2B2D42] text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Animated Decorative Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-[#5B7FA8] rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#3D5A80] rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.div>

      <div className="container mx-auto px-4 md:px-6 pt-0 pb-12 md:pt-0 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 leading-tight">
              WIN BIG AT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5B7FA8] via-[#87CEEB] to-[#5B7FA8] animate-pulse">
                PLAYTECH
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-4 md:mb-6 justify-center lg:justify-start">
              <motion.a
                href="https://bestslotgames.top/rqNgNZ7R"
                rel="nofollow"
                target="_blank"
                className="px-5 md:px-7 py-2.5 md:py-3 bg-gradient-to-r from-[#5B7FA8] via-[#87CEEB] to-[#5B7FA8] bg-size-200 hover:bg-pos-100 text-white font-black text-sm md:text-base rounded-lg transition-all shadow-2xl flex items-center justify-center gap-2 uppercase relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundSize: '200% 100%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Trophy size={18} className="relative z-10" />
                <span className="relative z-10">Play Now & Win</span>
              </motion.a>
              <motion.a
                href="https://bestslotgames.top/rqNgNZ7R"
                rel="nofollow"
                target="_blank"
                className="px-5 md:px-7 py-2.5 md:py-3 bg-transparent hover:bg-white/10 text-white font-bold text-sm md:text-base rounded-lg transition-all border-2 border-white flex items-center justify-center gap-2 uppercase"
                whileHover={{ scale: 1.05, borderColor: '#87CEEB' }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={18} className="fill-current" />
                Watch Demo
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#5B7FA8] to-[#87CEEB] border-2 border-[#2B2D42] flex items-center justify-center text-white font-bold text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      £
                    </motion.div>
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-bold">900K+</div>
                  <div className="text-gray-400 text-[10px]">Active Players</div>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-gray-600"></div>
              <div className="text-xs">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star size={12} className="fill-[#87CEEB] text-[#87CEEB]" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-gray-400 text-[10px]">Rated Excellent</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Age of the Gods Game Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Main Featured Game - Age of the Gods */}
              <motion.a
                href="https://bestslotgames.top/rqNgNZ7R"
                rel="nofollow"
                target="_blank"
                className="relative block cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                animate={{
                  y: [0, -10, 0],
                }}
                style={{
                  transition: 'transform 3s ease-in-out infinite',
                }}
              >
                <Image
                  src={heroImage}
                  alt="Age of the Gods - Premium Casino Slot"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />

                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5B7FA8] via-[#87CEEB] to-[#5B7FA8] rounded-full blur-3xl opacity-30 scale-110 -z-10"></div>
              </motion.a>

              {/* Floating Jackpot Indicator */}
              <motion.div
                className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5B7FA8]/95 to-[#3D5A80]/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-black text-white">£539K</div>
                    <div className="text-[10px] md:text-xs text-gray-200">Won Today</div>
                  </div>
                </div>
              </motion.div>

              {/* Pulse Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#87CEEB] rounded-full blur-3xl opacity-20 -z-20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider px-4">
          18+ | Play Responsibly | Terms Apply
        </p>
      </motion.div>
    </section>
  );
}
