import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Trophy, Sparkles, Zap } from 'lucide-react';

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Laptop Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1582603518944-5b55c828487e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBzbG90JTIwbWFjaGluZSUyMGdhbWluZ3xlbnwxfHx8fDE3NzU0Nzc0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Casino Gaming Platform"
              className="w-full max-w-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-[#1c1832] leading-tight">
              WHY CHOOSE US?
            </div>
            
            {/* Key Benefits - Only 3 items */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5B7FA8]/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#5B7FA8]" />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#1c1832] mb-2">Massive Jackpots & Big Wins</div>
                  <p className="text-gray-600 leading-relaxed">
                    Experience the largest progressive jackpots in the industry with life-changing prizes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5B7FA8]/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#5B7FA8]" />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#1c1832] mb-2">Premium Game Selection</div>
                  <p className="text-gray-600 leading-relaxed">
                    600+ exclusive branded slots featuring blockbuster movies and TV shows
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5B7FA8]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#5B7FA8]" />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#1c1832] mb-2">Trusted & Secure Platform</div>
                  <p className="text-gray-600 leading-relaxed">
                    Industry-leading security with certified fair play and reliable payouts
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Partnerships Highlight */}
            <div className="bg-gradient-to-br from-[#1c1832] to-[#2B2D42] p-6 rounded-2xl">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#87CEEB]" />
                </div>
                <div className="text-xl font-black text-white">
                  BLOCKBUSTER BRAND SLOTS
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                Play exclusive slots from <span className="font-bold text-white">The Walking Dead™</span>, 
                <span className="font-bold text-white"> Gladiator™</span>, 
                <span className="font-bold text-white"> Rocky™</span>, and many more! 
                Licensed partnerships with AMC, Paramount, MGM and Warner Bros.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}