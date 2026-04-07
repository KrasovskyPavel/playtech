import { headerLogo as logoImage } from '@/assets';

export function Header() {
  return (
    <header className="bg-[#2B2D42] text-white relative z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="Playtech" className="h-6 md:h-8" />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* UK Flag - Non-clickable */}
            <div className="flex items-center">
              <svg className="w-6 h-4 md:w-8 md:h-6" viewBox="0 0 32 24" fill="none">
                <rect width="32" height="24" fill="#012169"/>
                <path d="M0 0L32 24M32 0L0 24" stroke="white" strokeWidth="5"/>
                <path d="M0 0L32 24M32 0L0 24" stroke="#C8102E" strokeWidth="3"/>
                <path d="M16 0V24M0 12H32" stroke="white" strokeWidth="8"/>
                <path d="M16 0V24M0 12H32" stroke="#C8102E" strokeWidth="5"/>
              </svg>
            </div>
            
            {/* Get Bonus Button */}
            <a 
              href="https://bestslotgames.top/rqNgNZ7R"
              rel="nofollow"
              target="_blank"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-[#5B7FA8] via-[#87CEEB] to-[#5B7FA8] hover:from-[#87CEEB] hover:via-[#5B7FA8] hover:to-[#87CEEB] text-white font-black rounded-md transition-all hover:scale-105 shadow-2xl uppercase text-xs md:text-sm whitespace-nowrap animate-pulse"
            >
              Get Bonus
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}