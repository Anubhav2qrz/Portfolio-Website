import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  Download,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzaprqq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("Message sent successfully! I'll get back to you soon.", {
          description: "Thank you for reaching out.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast("Something went wrong. Please try again.", {
          description: "Formspree did not accept the request.",
        });
      }
    } catch (error) {
      toast("Network error. Please try again later.", {
        description: String(error),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <MessageCircle className="w-8 h-8 text-primary" />
        Contact Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <span>goonanubhav@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <span>+91 7001919941</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="text-primary" />
            <a
              href="https://www.linkedin.com/in/anubhav-goon-644b97327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <span>Krishnanagar, West Bengal, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Download className="text-primary" />
            <a
              href="/Anubhav_Resume.pdf"
              download
              className="text-blue-600 hover:underline"
            >
              Download Resume
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};
