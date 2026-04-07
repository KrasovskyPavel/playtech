import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#3D5A80] to-[#5B7FA8] text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
        <svg className="w-8 h-8 md:w-12 md:h-12 opacity-30" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      <div className="absolute left-6 md:left-12 top-1/3">
        <svg className="w-10 h-10 md:w-16 md:h-16 opacity-30" viewBox="0 0 64 64" fill="none">
          <path d="M32 8L48 32L32 56L16 32L32 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center lg:text-left">
            <p className="text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 opacity-90">
              JOIN US TODAY
            </p>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We help players win!
            </div>
          </div>
          <div>
            <a 
              href="https://bestslotgames.top/rqNgNZ7R"
              rel="nofollow"
              target="_blank"
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#2B2D42] rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors text-base md:text-lg font-semibold whitespace-nowrap"
            >
              TRY <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}