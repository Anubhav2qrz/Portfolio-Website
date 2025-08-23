import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Palette, 
  Smartphone, 
  TrendingUp, 
  Users, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Transform complex datasets into clear, actionable insights with interactive dashboards and compelling visualizations.",
    features: [
      "Statistical Analysis",
      "Data Cleaning & Processing",
      "Interactive Dashboards",
      "Report Generation"
    ],
    gradient: "from-primary to-primary-glow",
    delay: "0s"
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "Create intuitive, user-centered designs that enhance user experience and drive engagement across all platforms.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems"
    ],
    gradient: "from-accent to-accent-glow",
    delay: "0.2s"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Develop visual brand identity and marketing materials that communicate your message effectively and memorably.",
    features: [
      "Brand Identity Design",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design"
    ],
    gradient: "from-primary-glow to-accent",
    delay: "0.4s"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating service icons */}
        <div className="absolute top-20 left-1/4 animate-float opacity-5">
          <TrendingUp className="w-20 h-20 text-primary" />
        </div>
        <div className="absolute bottom-32 right-1/3 animate-float opacity-5" style={{ animationDelay: '1.5s' }}>
          <Users className="w-16 h-16 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining analytical expertise with creative design to deliver comprehensive solutions 
            that drive results and create meaningful user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group p-8 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-background" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 border border-border/30 group-hover:border-primary/30"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto bg-gradient-card border border-border/50 backdrop-blur-sm shadow-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-card-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's collaborate to bring your ideas to life with data-driven insights and beautiful design. 
              I'm here to help you achieve your goals with personalized solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-accent transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};