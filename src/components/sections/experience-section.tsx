import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Code, Award, Calendar, Lightbulb, Smartphone } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across different domains and technologies
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>
          
          <div className="space-y-12">
            {/* Current Role 1 */}
            <div className="relative flex items-start gap-8">
              <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full items-center justify-center shadow-lg relative z-10">
                <Building className="w-8 h-8 text-white" />
              </div>
              <Card className="flex-1 p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-card to-card/80">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Software Developer Team Lead</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">Stockifi.io</span>
                        <span>•</span>
                        <span>Europe-based, Remote</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>2023 - Present</span>
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Leading development team for enterprise trading platform, managing scalable React/TypeScript 
                    applications serving 300+ users globally. Responsible for architecture decisions, code reviews, 
                    and mentoring junior developers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Leadership</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React/TypeScript</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Trading Platform</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Role 2 */}
            <div className="relative flex items-start gap-8">
              <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full items-center justify-center shadow-lg relative z-10">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <Card className="flex-1 p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-card to-card/80">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Lead Software Engineer</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">Kreasof AI</span>
                        <span>•</span>
                        <span>Early-stage Startup</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>2025 - Present</span>
                      </div>
                    </div>
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Code className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Leading software engineering initiatives at early-stage AI startup, focusing on innovative 
                    AI-powered solutions. Building scalable architecture and establishing development processes 
                    for rapid product iteration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">AI/ML</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Startup</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Innovation</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education/Training */}
            <div className="relative flex items-start gap-8">
              <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full items-center justify-center shadow-lg relative z-10">
                <Award className="w-8 h-8 text-white" />
              </div>
              <Card className="flex-1 p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-card to-card/80">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Tech Student</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">Apple Developer Academy @BINUS Bali</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>2025 - Present</span>
                      </div>
                    </div>
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Advancing iOS development skills and product design expertise through Apple&apos;s intensive 
                    developer program. The only international Apple academy in Indonesia, focusing on 
                    Swift, SwiftUI, and Apple ecosystem technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Swift</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">iOS Development</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Product Design</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;