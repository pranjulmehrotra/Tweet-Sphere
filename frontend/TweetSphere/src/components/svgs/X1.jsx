import { Share2, Globe2, Sparkles } from 'lucide-react';

const XSvgLogo = () => {
  return (
    <div className="relative w-10 h-10 transform hover:scale-110 transition-all duration-500">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-full blur-sm animate-pulse" />
      
      {/* Rotating rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-indigo-400/30 animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-1 rounded-full border border-dashed border-purple-400/30 animate-[spin_6s_linear_infinite_reverse]" />
      
      {/* Central logo element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-6 h-6">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-lg animate-pulse" />
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Share2 className="w-3 h-3 text-white drop-shadow-lg transform hover:rotate-12 transition-transform" />
          </div>
          
          {/* Floating icons */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 animate-bounce">
            <Globe2 className="w-2 h-2 text-indigo-300" />
          </div>
          <div className="absolute top-1/2 -right-2 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-2 h-2 text-purple-300" />
          </div>
        </div>
      </div>
      
      {/* Single particle for minimal effect */}
      <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-[ping_2s_ease-in-out_infinite]" />
    </div>
  );
};

function XSvg() {
  return (
    <div className="flex items-center gap-1 p-2">
      <XSvgLogo />
      <span className="text-sm font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        TweetSphere
      </span>
    </div>
  );
}

export default XSvg;
