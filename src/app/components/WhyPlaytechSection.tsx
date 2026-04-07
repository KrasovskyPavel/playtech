import { Globe, Smartphone, Monitor, Flag, Settings, Trophy } from 'lucide-react';

export function WhyPlaytechSection() {
  const features = [
    {
      icon: Trophy,
      title: "Massive Progressive Jackpots",
      description: "Win life-changing prizes with jackpots reaching millions in top slots"
    },
    {
      icon: Globe,
      title: "600+ Premium Slots",
      description: "From classic fruit machines to blockbuster movie-themed adventures"
    },
    {
      icon: Settings,
      title: "Big Bonuses & Free Spins",
      description: "Unlock massive multipliers, wild features and bonus rounds for huge wins"
    }
  ];

  return (
    <section className="bg-[#2B2D42] text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <p className="text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-gray-400">
            WHY PLAYTECH 
          </p>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
            A client-first approach:
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col">
                <div className="mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#3D5A80] flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#5B9FED]" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="border-l-2 border-white pl-3 md:pl-4">
                  <div className="text-lg md:text-xl font-semibold mb-2">
                    {feature.title}
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}