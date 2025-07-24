import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/10 rotate-45 rounded-sm animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-secondary/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-8 bg-accent/10 rounded-full rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-primary/5 rounded-sm rotate-45 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Muhammad Ramdan"
                width={128}
                height={128}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Muhammad Ramdan
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground mb-6 font-medium">
            <span className="text-primary">(</span>dadanisme<span className="text-primary">)</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            World-Class Developer & Product Innovator
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert in frontend development with React & TypeScript, Swift for iOS, and full-stack solutions. 
            Passionate problem solver creating scalable products from idea to production.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg">Bali, Indonesia</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg h-12 px-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-12 px-8 border-2 hover:bg-muted/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pb-8 sm:pb-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Current Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;