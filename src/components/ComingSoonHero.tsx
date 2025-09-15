import { Building2, TrendingUp, Target } from "lucide-react";
import { EmailSubscription } from "./EmailSubscription";
import { ThemeToggle } from "./ThemeToggle";
import heroBackground from "@/assets/hero-background.jpg";
import ffvnLogo from "@/assets/ffvn-logo.png";

export const ComingSoonHero = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80 dark:opacity-90"></div>
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <div className="mb-6 sm:mb-8 animate-in slide-in-from-top duration-1000">
          <img 
            src={ffvnLogo} 
            alt="FFVN Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 drop-shadow-2xl"
          />
        </div>

        {/* Main heading */}
        <div className="mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-1000 delay-200">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
            FFVN
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-4 sm:mb-6">
            Future Fund Vietnam
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-4 sm:mb-6"></div>
        </div>

        {/* Coming soon message */}
        <div className="mb-8 sm:mb-12 animate-in fade-in duration-1000 delay-500">
          <h3 className="text-lg sm:text-xl md:text-2xl text-white/80 mb-3 sm:mb-4 font-light">
            Sắp ra mắt
          </h3>
          <p className="text-sm sm:text-lg text-white/70 max-w-xl lg:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Quỹ đầu tư hàng đầu Việt Nam đang chuẩn bị cho sự ra mắt hoành tráng. 
            Hãy là người đầu tiên nhận được thông tin về cơ hội đầu tư tương lai.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-sm sm:max-w-2xl lg:max-w-4xl animate-in slide-in-from-bottom duration-1000 delay-700 px-4">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-luxury">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4 mx-auto" />
            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Tăng trưởng bền vững</h4>
            <p className="text-white/70 text-xs sm:text-sm">Chiến lược đầu tư dài hạn với mức sinh lời ổn định</p>
          </div>
          
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-luxury">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4 mx-auto" />
            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Đa dạng danh mục</h4>
            <p className="text-white/70 text-xs sm:text-sm">Đầu tư across nhiều lĩnh vực tiềm năng tại Việt Nam</p>
          </div>
          
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-luxury sm:col-span-2 lg:col-span-1">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4 mx-auto" />
            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Chuyên nghiệp</h4>
            <p className="text-white/70 text-xs sm:text-sm">Đội ngũ chuyên gia giàu kinh nghiệm quản lý quỹ</p>
          </div>
        </div>

        {/* Email subscription */}
        <div className="animate-in fade-in duration-1000 delay-1000 w-full max-w-md px-4">
          <EmailSubscription />
        </div>

        {/* Bottom text */}
        <div className="mt-12 sm:mt-16 animate-in fade-in duration-1000 delay-1200">
          <p className="text-white/50 text-xs sm:text-sm px-4">
            © 2024 FFVN - Future Fund Vietnam. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-accent rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-8 sm:right-16 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
      <div className="absolute bottom-32 left-8 sm:left-20 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-bounce"></div>
    </div>
  );
};