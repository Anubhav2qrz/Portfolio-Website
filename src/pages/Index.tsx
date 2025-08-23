import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Anubhav Goon.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
