import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Users, Building, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 shadow-lg border-l-4 border-l-primary hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Expert in React/TypeScript ecosystem with 5+ years of experience. 
                      Specialized in building enterprise-grade applications and leading development teams 
                      to deliver scalable solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg border-l-4 border-l-secondary hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Smartphone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">iOS Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Apple Developer Academy participant mastering Swift, SwiftUI, and iOS ecosystem. 
                      Creating native mobile experiences with Apple&apos;s cutting-edge technologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg border-l-4 border-l-accent hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Leadership & Innovation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Leading engineering teams across multiple companies. Expert in product engineering, 
                      PRD creation, and project management. Building solutions that serve 300+ users globally.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card to-muted/50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Building className="w-7 h-7 text-primary" />
                Current Roles
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Software Engineer Team Lead</h4>
                    <p className="text-muted-foreground">Stockifi.io (Europe-based, Remote)</p>
                    <p className="text-sm mt-1">Leading React/TypeScript development for trading platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Lead Software Engineer</h4>
                    <p className="text-muted-foreground">Kreasof AI (Early-stage Startup)</p>
                    <p className="text-sm mt-1">Building AI-powered solutions with cutting-edge technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Tech Student</h4>
                    <p className="text-muted-foreground">Apple Developer Academy @BINUS Bali</p>
                    <p className="text-sm mt-1">The only international Apple academy in Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Bachelor&apos;s in Electrical Engineering</p>
                  <p className="text-sm text-muted-foreground">Universitas Pendidikan Indonesia (GPA: 3.51)</p>
                </div>
                <div>
                  <p className="font-medium">Natural Sciences</p>
                  <p className="text-sm text-muted-foreground">SMART Ekselensia Indonesia (94.5 avg)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;