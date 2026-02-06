import React from 'react';
import ManufacturingHeroTile from './components/ManufacturingHeroTile';
import { Settings, ExternalLink, ChevronRight } from 'lucide-react';

export default function App() {
  // Shared styling constants mimicking the input HTML's "Deep Charcoal" theme
  const theme = {
    bg: '#212529',
    primary: '#F37021',
    textMain: '#E9ECEF',
    textMuted: '#ADB5BD',
    border: '#495057',
  };

  return (
    <div 
      className="min-h-screen font-sans flex flex-col items-center justify-center p-8 overflow-x-hidden"
      style={{ backgroundColor: theme.bg, color: theme.textMain, fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {/* Font Import (Simulation) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Wrapper */}
      <div className="w-full max-w-[1080px]">
        
        {/* Header */}
        <header className="flex items-center justify-between border-b px-6 py-4 rounded-xl shadow-lg mb-8"
          style={{ 
            backgroundColor: theme.bg, 
            borderColor: theme.border 
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-6 h-6" style={{ color: theme.primary }}>
              <Settings className="w-full h-full animate-spin-slow" />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">ManufacturingHero</h2>
          </div>

          <div className="flex flex-1 justify-end items-center gap-8">
            <nav className="hidden md:flex items-center gap-9">
              {['Solutions', 'Efficiency', 'Case Studies'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-medium transition-colors hover:text-orange-500"
                  style={{ color: theme.textMuted }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <button 
              className="flex items-center justify-center h-10 px-4 rounded-lg text-sm font-bold tracking-wide transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: theme.primary, color: theme.bg }}
            >
              Get Started
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12">
          
          {/* Animated Tile Component */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-gray-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <ManufacturingHeroTile />
          </div>

          {/* Side Content / Explanation (Optional context filler) */}
          <div className="hidden xl:block w-full max-w-[400px] space-y-6">
             <h1 className="text-5xl font-bold leading-tight">
               Real-time <span style={{ color: theme.primary }}>Factory Intelligence</span>
             </h1>
             <p className="text-lg leading-relaxed" style={{ color: theme.textMuted }}>
               Connect your machines, workers, and systems in one unified dashboard. Visualize bottleneck data instantly.
             </p>
             <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 rounded-lg border font-bold hover:bg-white/5 transition-colors" style={{ borderColor: theme.border }}>
                  View Demo
                </button>
             </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="flex flex-col gap-2 rounded-lg p-6 backdrop-blur shadow-md border"
               style={{ backgroundColor: theme.border, borderColor: `${theme.textMuted}33` }}>
            <p className="text-base font-medium" style={{ color: theme.textMuted }}>Operational Uptime</p>
            <p className="text-2xl font-bold leading-tight">99.9%</p>
            <p className="text-base font-bold" style={{ color: theme.primary }}>+2.4%</p>
          </div>

          <div className="flex flex-col gap-2 rounded-lg p-6 backdrop-blur shadow-md border"
               style={{ backgroundColor: theme.border, borderColor: `${theme.textMuted}33` }}>
            <p className="text-base font-medium" style={{ color: theme.textMuted }}>Defect Rate</p>
            <p className="text-2xl font-bold leading-tight">0.04%</p>
            <p className="text-base font-bold" style={{ color: theme.primary }}>-84%</p>
          </div>

          <div className="group cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg p-6 shadow-lg transition-all hover:brightness-110 active:brightness-90"
               style={{ backgroundColor: theme.primary }}>
            <button className="text-lg font-black tracking-tight flex items-center gap-2 group-hover:scale-105 transition-transform" style={{ color: theme.bg }}>
              Scale Your Factory <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
