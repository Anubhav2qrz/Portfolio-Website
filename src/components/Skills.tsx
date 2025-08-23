import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Palette, Database, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const technicalSkills = [
  { name: "Java", level: 85, category: "Programming" },
  { name: "C/C++", level: 80, category: "Programming" },
  { name: "Python", level: 60, category: "Programming" },
  { name: "Data Structures & Algorithms", level: 75, category: "Computer Science" },
  { name: "Data Analysis", level: 70, category: "Analytics" },
  { name: "SQL", level: 65, category: "Database" },
];

const creativeSkills = [
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Graphic Design", level: 80, category: "Design" },
  { name: "Wireframing & Prototyping", level: 75, category: "Design" },
  { name: "User Research", level: 70, category: "Research" },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ 
    skills, 
    title, 
    icon: Icon, 
    gradient 
  }: { 
    skills: typeof technicalSkills; 
    title: string; 
    icon: any; 
    gradient: string; 
  }) => (
    <Card className="p-8 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300">
      <div className="flex items-center mb-8">
        <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mr-4`}>
          <Icon className="w-6 h-6 text-background" />
        </div>
        <h3 className="text-2xl font-semibold text-card-foreground">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-card-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress 
              value={isVisible ? skill.level : 0} 
              className="h-2 bg-muted/30"
              style={{ 
                transition: `all 0.8s ease-in-out ${index * 0.1}s`,
              }}
            />
            <span className="text-xs text-muted-foreground">{skill.category}</span>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-muted/20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Floating tech icons */}
        <div className="absolute top-20 right-1/4 animate-float opacity-10">
          <Code2 className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <Database className="w-12 h-12 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A blend of technical programming skills and creative design expertise, 
            constantly evolving to meet the demands of modern data analysis and user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-up">
            <SkillCard
              skills={technicalSkills}
              title="Technical Skills"
              icon={Code2}
              gradient="bg-gradient-to-br from-primary to-primary-glow"
            />
          </div>

          {/* Creative Skills */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SkillCard
              skills={creativeSkills}
              title="Creative Skills"
              icon={Palette}
              gradient="bg-gradient-to-br from-accent to-accent-glow"
            />
          </div>
        </div>

        {/* Skills Philosophy */}
        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto bg-gradient-card border border-border/50 backdrop-blur-sm shadow-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-card-foreground">Continuous Learning</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of continuous learning and staying updated with the latest technologies. 
              My journey combines analytical thinking with creative problem-solving, allowing me to approach 
              challenges from both technical and design perspectives. Every project is an opportunity to 
              learn something new and improve my craft.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};