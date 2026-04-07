import { motion } from 'motion/react';
import { Play, Gift, TrendingUp } from 'lucide-react';

export function WelcomeBonusBanner() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-[#3D5A80] via-[#5B7FA8] to-[#6B8CAE] relative overflow-hidden">
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
            EXCLUSIVE PLAYTECH OFFER
          </div>

          {/* Headline */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 uppercase">
            UP TO 150% BONUS
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            + £200,000 WELCOME PACKAGE
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-white">
              <Gift size={18} className="sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">1000+ Premium Games</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Play size={18} className="fill-current sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">Live Dealer Tables</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              <span className="font-black text-sm sm:text-base uppercase">24/7 Support</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://bestslotgames.top/rqNgNZ7R"
              rel="nofollow"
              target="_blank"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white hover:bg-gray-100 text-[#2B2D42] font-black text-base sm:text-lg md:text-xl rounded-md transition-all hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2 sm:gap-3 uppercase"
            >
              <Gift size={24} className="sm:w-7 sm:h-7" />
              Explore Platform
            </a>
            <a
              href="https://bestslotgames.top/rqNgNZ7R"
              rel="nofollow"
              target="_blank"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-transparent hover:bg-white/10 text-white font-black text-base sm:text-lg md:text-xl rounded-md transition-all border-2 border-white inline-flex items-center justify-center gap-2 sm:gap-3 uppercase"
            >
              View All Games
            </a>
          </div>

          {/* Terms */}
          <p className="text-xs sm:text-sm text-white/80 mt-4 sm:mt-6 uppercase">
            Licensed & Regulated | Responsible Gaming
          </p>
        </motion.div>
      </div>
    </section>
  );
}