import { Share2, Globe2, Sparkles } from 'lucide-react';

const AnimatedLogo = () => {
  return (
    <div className="relative w-[28rem] h-[28rem] transform hover:scale-110 transition-all duration-500 ease-in-out">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
      
      {/* Rotating rings */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/30 animate-[spin_12s_linear_infinite]" />
      <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-400/30 animate-[spin_8s_linear_infinite_reverse]" />
      <div className="absolute inset-8 rounded-full border-2 border-dashed border-pink-400/30 animate-[spin_6s_linear_infinite]" />
      
      {/* Central logo element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[16rem] h-[16rem]"> {/* Increased central logo size */}
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-lg animate-pulse" />
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Share2 className="w-[4rem] h-[4rem] text-white drop-shadow-lg transform hover:rotate-12 transition-transform ease-in-out duration-500" /> {/* Increased icon size */}
          </div>
          
          {/* Floating icons with sequential animations */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce delay-1000">
            <Globe2 className="w-[2.5rem] h-[2.5rem] text-indigo-300 transform hover:scale-125 transition-all duration-300" />
          </div>
          <div className="absolute top-1/2 -right-6 animate-bounce delay-1200" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-[2.5rem] h-[2.5rem] text-purple-300 transform hover:scale-125 transition-all duration-300" />
          </div>
          <div className="absolute top-1/2 -left-6 animate-bounce delay-1400" style={{ animationDelay: '0.4s' }}>
            <Sparkles className="w-[2.5rem] h-[2.5rem] text-pink-300 transform hover:scale-125 transition-all duration-300" />
          </div>
        </div>
      </div>
      
      {/* Floating particles with smoother transitions */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-[ping_2s_ease-in-out_infinite]" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-[ping_2s_ease-in-out_infinite_0.7s]" />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-[ping_2s_ease-in-out_infinite_0.4s]" />
    </div>
  );
};

function XSvg() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8"> {/* Removed background gradient */}
      <div className="text-center">
        <AnimatedLogo />
        <h1 className="mt-8 text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 transform hover:scale-110">
          TweetSphere
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Where connections come alive</p>
      </div>
    </div>
  );
}

export default XSvg;
