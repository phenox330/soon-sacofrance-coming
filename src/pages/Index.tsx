const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-elegant" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            hsl(var(--foreground)) 35px,
            hsl(var(--foreground)) 70px
          )`
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 px-6 text-center max-w-3xl mx-auto">
        <div className="animate-fadeIn">
          {/* Decorative line */}
          <div className="w-16 h-[1px] bg-primary/20 mx-auto mb-8" />
          
          {/* Main message */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed mb-6">
            Votre boutique refait peau neuve et revient très vite avec un autre nom de domaine :
          </h1>
          
          {/* Domain highlight */}
          <div className="group cursor-pointer inline-block">
        <a
          href="https://saco-france.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary tracking-wide animate-pulse-subtle transition-all duration-300 group-hover:scale-105"
        >
      saco-france.fr
      </a>
    <div className="w-full h-[1px] bg-primary/30 mt-4 transition-all duration-300 group-hover:bg-primary/50" />
    </div>
          
          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-12">
            <span className="w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <span className="w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-[1px] border-t-[1px] border-primary/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-[1px] border-t-[1px] border-primary/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-[1px] border-b-[1px] border-primary/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-[1px] border-b-[1px] border-primary/10" />
    </div>
  );
};

export default Index;
