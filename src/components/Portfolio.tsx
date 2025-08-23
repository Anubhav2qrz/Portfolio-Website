import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Wrench } from "lucide-react";

const portfolioItems = [
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing sales performance and customer insights with real-time data processing.",
    tags: ["Python", "Pandas", "Plotly", "Dashboard"],
    status: "Coming Soon",
    type: "Data Analysis",
    gradient: "from-primary to-primary-glow"
  },
  {
    title: "E-Commerce UI Design",
    description: "Modern mobile-first e-commerce interface design with intuitive user flow and conversion optimization.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    status: "In Progress",
    type: "UI/UX Design",
    gradient: "from-accent to-accent-glow"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Machine learning project analyzing customer behavior patterns to improve marketing strategies.",
    tags: ["Python", "Scikit-learn", "Data Mining", "ML"],
    status: "Coming Soon",
    type: "Data Science",
    gradient: "from-primary-glow to-accent"
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo design, color palette, and marketing materials.",
    tags: ["Branding", "Logo Design", "Graphic Design", "Identity"],
    status: "Conceptual",
    type: "Graphic Design",
    gradient: "from-accent-glow to-primary"
  }
];

export const Portfolio = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Coming Soon": return "bg-primary/20 text-primary border-primary/30";
      case "In Progress": return "bg-accent/20 text-accent border-accent/30";
      case "Conceptual": return "bg-muted text-muted-foreground border-border";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/10 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating project icons */}
        <div className="absolute top-32 right-20 animate-float opacity-5">
          <Wrench className="w-14 h-14 text-primary" />
        </div>
        <div className="absolute bottom-40 left-16 animate-float opacity-5" style={{ animationDelay: '2s' }}>
          <Calendar className="w-12 h-12 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Portfolio & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my journey in data analysis and design. While some projects are still in development, 
            they represent my passion for creating meaningful solutions and beautiful experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group p-8 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-background rounded opacity-80" />
                </div>
                <Badge className={`${getStatusColor(item.status)} text-xs`}>
                  {item.status}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-accent/80 mb-3 font-medium">
                {item.type}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-0">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex-1 border border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  disabled={item.status === "Coming Soon" || item.status === "Conceptual"}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {item.status === "Coming Soon" ? "Coming Soon" : "View Project"}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="border border-border/30 hover:border-accent/30 hover:bg-accent/5 hover:text-accent transition-all duration-300"
                  disabled={item.status === "Coming Soon" || item.status === "Conceptual"}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto bg-gradient-card border border-border/50 backdrop-blur-sm shadow-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-card-foreground">More Projects Coming Soon</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm currently working on several exciting projects that combine data analysis with innovative design. 
              These include real-world data science projects from my internship and creative UI/UX solutions for 
              various clients. Stay tuned for updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Follow My Progress
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-accent transition-all duration-300"
              >
                Discuss a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};