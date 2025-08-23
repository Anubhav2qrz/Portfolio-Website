import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into actionable insights while creating beautiful, 
            user-centered digital experiences that make technology accessible to everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <Card className="p-8 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">B.Tech Computer Science Engineering</h4>
                <p className="text-sm text-muted-foreground">Specialization in Data Science</p>
                <p className="text-sm text-muted-foreground mt-1">Currently Pursuing</p>
              </div>
            </div>
          </Card>

          {/* Experience Card */}
          <Card className="p-8 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Experience</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-accent">Data Analyst Intern</h4>
                <p className="text-sm text-muted-foreground">Internshala</p>
                <p className="text-sm text-muted-foreground mt-1">Since June 2024</p>
              </div>
              <div>
                <h4 className="font-medium text-accent">Freelance Designer</h4>
                <p className="text-sm text-muted-foreground">Graphic Design & UI/UX</p>
              </div>
            </div>
          </Card>

          {/* Personal Card */}
          <Card className="p-8 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-glow/10 rounded-lg flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-primary-glow" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Personal</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in the power of data to tell stories and design to bring those stories to life. 
                When I'm not analyzing datasets or crafting interfaces, you'll find me exploring new 
                technologies and design trends.
              </p>
            </div>
          </Card>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-card border border-border/50 backdrop-blur-sm shadow-card">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-primary font-semibold">Anubhav Goon</span>, an aspiring Data Analyst 
                currently doing an internship at <span className="text-accent font-semibold">Internshala</span> while 
                freelancing in UI/UX design. I'm passionate about transforming complex data into meaningful insights 
                and designing creative digital experiences that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my B.Tech in Computer Science Engineering with a specialization in Data Science, 
                I'm constantly learning and applying new technologies to bridge the gap between data analytics and 
                user experience design. My goal is to create data-driven solutions that are not only powerful but 
                also beautifully designed and user-friendly.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};