import { Button } from "@/components/ui/button";
const profileImage = "/anubhav-uploads/9a695d61-c262-4562-b9d1-bb664ac27313.png";
import { ArrowDown, Code, Database, Palette } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero flex items-center justify-center">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Database className="w-12 h-12 text-primary opacity-30" />
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Code className="w-10 h-10 text-accent opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Palette className="w-14 h-14 text-primary-glow opacity-25" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Anubhav Goon
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Aspiring <span className="text-primary font-semibold">Data Analyst</span> & 
              Creative <span className="text-accent font-semibold">UI/UX Designer</span>
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Transforming data into insights while designing intuitive digital experiences. 
              Currently interning at Internshala and freelancing in design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-accent transition-all duration-300 text-lg px-8 py-6"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow" />
              <img
                src={profileImage}
                alt="Anubhav Goon - Data Analyst & UI/UX Designer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-card"
              />
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-rotate-slow" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};