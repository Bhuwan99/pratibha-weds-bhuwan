export const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center bg-gradient-to-b from-transparent via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-rose blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl">💍</span>
            <span className="text-xl md:text-2xl">✨</span>
            <span className="text-2xl md:text-3xl">💍</span>
          </div>
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
        
        {/* Invitation message */}
        <div className="mb-8 px-4">
          <p className="text-foreground/90 text-base md:text-lg font-light leading-relaxed" style={{ fontFamily: "'Lora', serif", letterSpacing: '0.02em' }}>
            We would be honored to have you and your family with us to shower your blessings on <span className="text-gold-shimmer font-medium">Pra~Bhu</span> and share in the celebrations filled with love, laughter, and happiness.
          </p>
        </div>
        
        {/* Decorative hearts */}
        <div className="flex justify-center gap-3 text-xl md:text-2xl opacity-70 mb-8">
          <span className="animate-pulse">💕</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💖</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💕</span>
        </div>
        
        {/* Copyright section */}
        <div className="mt-8 pt-6 border-t border-muted-foreground/20">
          <p className="text-muted-foreground text-xs md:text-sm font-light" style={{ fontFamily: "'Lora', serif" }}>
            © 2026 Pratibha & Bhuwan. All rights reserved.
          </p>
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          <span className="text-muted-foreground/50 text-xs">🙏</span>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        </div>
      </div>
    </footer>
  );
};
