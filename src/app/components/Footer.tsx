import {
  age18Logo as img18Plus,
  beGambleAwareLogo as imgBeGambleAware,
  gamStopLogo as imgGamStop,
  gamecheckLogo,
  responsibleGamingLogo as imgResponsible,
} from '@/assets';

export function Footer() {
  return (
    <footer className="bg-[#1c1832] text-white">
      {/* Top Section - Organization Logos */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {/* 18+ Badge */}
            <div className="h-12 md:h-16 flex items-center">
              <img 
                src={img18Plus} 
                alt="18+" 
                className="h-full w-auto"
              />
            </div>
            
            {/* GameCheck Logo */}
            <div className="h-12 md:h-16 flex items-center">
              <img 
                src={gamecheckLogo} 
                alt="GameCheck" 
                className="h-full w-auto"
              />
            </div>
            
            {/* GamStop Logo */}
            <div className="h-12 md:h-16 flex items-center">
              <img 
                src={imgGamStop} 
                alt="GamStop" 
                className="h-full w-auto"
              />
            </div>
            
            {/* BeGambleAware Logo */}
            <div className="h-12 md:h-16 flex items-center">
              <img 
                src={imgBeGambleAware} 
                alt="BeGambleAware" 
                className="h-full w-auto"
              />
            </div>
            
            {/* Additional Organization Logo */}
            <div className="h-12 md:h-16 flex items-center">
              <img 
                src={imgResponsible} 
                alt="Responsible Gaming" 
                className="h-full w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - License Text */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <p className="text-center text-xs md:text-sm text-gray-300 leading-relaxed">
            Playtech Plc is licensed and regulated in Great Britain by the Gambling Commission under account number 38818.
          </p>
          <p className="text-center text-xs md:text-sm text-gray-300 mt-2 leading-relaxed">
            Playtech PLC holds a critical gaming supply corporate license number MGA/CRP/137/2007, issued on 06 December 2018 by the Malta Gaming Authority
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            {/* Center - Privacy Link */}

            {/* Right - Crafted by */}
            <div className="text-xs md:text-sm text-gray-300 order-3">
              Crafted by <span className="font-bold">BRND WGN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}