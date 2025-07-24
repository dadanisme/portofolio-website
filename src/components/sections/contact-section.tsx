import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, MessageSquare, Users, Download, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let&apos;s discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 shadow-xl bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className="w-7 h-7 text-primary" />
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:huntercitation@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        huntercitation@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Bali, Indonesia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="p-8 shadow-xl bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://linkedin.com/in/dadanisme" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/dadanisme" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-8 shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you&apos;re looking for a team lead, full-stack developer, or technical consultant, 
                  I&apos;m here to help bring your vision to life with cutting-edge technology and proven expertise.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </Button>
                <Button variant="outline" size="lg" className="w-full border-2 hover:bg-muted/50">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-muted">
                <p className="text-sm text-muted-foreground">
                  Typically responds within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;