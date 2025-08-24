import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Send, Download, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzaprqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("Message sent successfully! I'll get back to you soon.", {
          description: "Thank you for reaching out.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast("Error sending message. Please check your connection.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "goonanubhav@gmail.com",
      href: "mailto:goonanubhav@gmail.com",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7001919941",
      href: "tel:+917001919941",
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anubhav-goon-644b97327",
      href: "https://linkedin.com/in/anubhav-goon-644b97327",
      gradient: "from-primary-glow to-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null,
      gradient: "from-accent-glow to-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        {/* Floating contact icons */}
        <div className="absolute top-24 left-1/4 animate-float opacity-5">
          <MessageCircle className="w-16 h-16 text-primary" />
        </div>
        <div
          className="absolute bottom-32 right-1/3 animate-float opacity-5"
          style={{ animationDelay: "1.5s" }}
        >
          <Send className="w-14 h-14 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start a project or just want to chat about data and design?
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with fellow data enthusiasts,
                potential clients, and anyone interested in the intersection of
                analytics and design. Whether you have a project in mind or just
                want to network, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={info.label}
                    className="p-6 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-card-foreground">
                          {info.label}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary hover:text-primary-glow transition-colors duration-200 break-all"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Resume Download */}
            <Card className="p-6 bg-gradient-card border border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-card-foreground mb-1">
                    Download Resume
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Get a detailed overview of my skills and experience
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-accent transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" /> CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-gradient-card border border-border/50 backdrop-blur-sm shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
