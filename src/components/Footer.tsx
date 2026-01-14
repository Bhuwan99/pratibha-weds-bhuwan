export const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-lg mx-auto">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <span className="text-2xl">🙏</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        
        {/* Emotional message */}
        <p className="text-foreground/80 text-lg md:text-xl mb-3 font-light">
          Aapki duaon aur pyaar ke saath
        </p>
        
        {/* Logo */}
        <p className="logo-text text-3xl md:text-4xl text-gold-shimmer mb-4">
          PraBhu
        </p>
        
        {/* Hearts */}
        <div className="flex justify-center gap-2 text-xl opacity-60">
          <span>💕</span>
        </div>
      </div>
    </footer>
  );
};
