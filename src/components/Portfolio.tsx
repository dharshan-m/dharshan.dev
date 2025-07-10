
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  Github, 
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  User,
  Briefcase,
  Wrench,
  FolderOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Application Development",
      description: "Custom dashboards, MERN Stack applications, API integration, and responsive design for all devices.",
      features: ["MERN Stack Development", "Custom Dashboards", "API Integration", "Responsive Design"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Application Development",
      description: "Cross-platform apps using React Native with Firebase integration and beautiful UI/UX.",
      features: ["React Native Apps", "Firebase Integration", "Cross-platform", "Beautiful UI/UX"]
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "UI Development",
      description: "Pixel-perfect front-end development using React, TypeScript, and Tailwind CSS.",
      features: ["React + TypeScript", "Tailwind CSS", "Component-based", "Single Page Apps"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Bug Fixes & Features",
      description: "Resolve issues, add new features, and improve performance of existing applications.",
      features: ["Bug Resolution", "Feature Addition", "Performance Optimization", "Clean Code"]
    }
  ];

  const techStack = {
    frontend: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Redux"],
    backend: ["Node.js", "Express.js", "MongoDB", "SQL", "Firebase"],
    mobile: ["React Native"]
  };

  const projects = [
    "TrackEasy (SaaS Role-Based Expense Tracker)",
    "Woodenhut wood calculator and invoice generator App",
    "Job Portal web application",
    "Nutolicious E-Commerce Site",
    "woodenhut.in E-commerce site",
    "digri.ai",
    "fitnethix.com",
    "sece.ac.in",
    "sedt.ac.in",
    "jeanpierrefux.com",
    "jemptpro.com",
    "legacynutritionandtraining.com",
    "diegorodriguezfitness.com"
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: <User className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">
              Dharshan P M
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-primary/20'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-primary/20'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0">
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Dharshan</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
              <span className="typing-animation">Passionate Freelance Developer</span>
            </div>
          </div>
          
          <div className="animate-slide-in-left space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in React.js, MERN Stack, and Mobile App Development. 
              Building responsive web apps and mobile applications that are fast, modern, and user-friendly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-shadow"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="animate-bounce mt-12">
            <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-xl text-muted-foreground">Passionate about creating digital experiences</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg leading-relaxed">
                Hi, I'm <strong>Dharshan</strong> — a passionate freelance developer with expertise in 
                React.js, MERN Stack, and Mobile App Development. I specialize in building responsive 
                web apps, custom dashboards, and mobile applications that are fast, modern, and user-friendly.
              </p>
              <p className="text-lg leading-relaxed">
                With over <strong>1.5 years</strong> of hands-on experience, I've worked with startups 
                and businesses to bring their ideas to life. I focus on quality, clarity, and long-term scalability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">1.5+ Years Experience</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Full-Stack Developer</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Mobile App Developer</span>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="glass-effect border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Tech Stack</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.frontend.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-muted rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.backend.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-muted rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Mobile</h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.mobile.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-muted rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Services I Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive development solutions for your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-effect border-primary/20 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-primary flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects Portfolio</h2>
            <p className="text-xl text-muted-foreground">Some of the amazing projects I've worked on</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="glass-effect border-primary/20 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <FolderOpen className="w-8 h-8 text-primary" />
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-2">{project}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Database className="w-4 h-4" />
                    <span>Full-Stack Project</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Looking to bring your web or mobile idea to life? Let's discuss your project!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-effect border-primary/20 card-hover">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a 
                  href="mailto:dharshanmohan2704@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  dharshanmohan2704@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 card-hover">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a 
                  href="tel:+919788915620"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +91 97889 15620
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-shadow"
              onClick={() => window.open('mailto:dharshanmohan2704@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/919788915620')}
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Dharshan P M. Built with React.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
