import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers, potential collaborators, and anyone passionate about technology and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;