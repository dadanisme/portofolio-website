import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Code, Lightbulb, MapPin, Database, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications that showcase my expertise and impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Project 1 */}
          <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card via-card to-muted/20">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  Stockifi Trading Platform
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Enterprise-grade React/TypeScript trading platform serving 300+ global users. 
                Features real-time data visualization, advanced charting, and portfolio management 
                with exceptional performance and reliability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Trading</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Enterprise</span>
              </div>
              <div className="flex gap-3">
                <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary hover:text-white">
                  View Details
                </Button>
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Featured Project 2 */}
          <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card via-card to-muted/20">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-10 h-10 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                  AI-Powered Drone Dashboard
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors cursor-pointer" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Intelligent drone inspection dashboard with real-time analytics and AI-powered insights. 
                Features automated reporting, predictive maintenance alerts, and comprehensive 
                data visualization for industrial applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">AI/ML</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Analytics</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">IoT</span>
              </div>
              <div className="flex gap-3">
                <Button size="sm" className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-white">
                  View Details
                </Button>
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  WebGIS Mapping Solutions
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Interactive mapping solutions using OpenLayers and Mapbox for geospatial data visualization and analysis.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-muted rounded text-xs">OpenLayers</span>
                <span className="px-2 py-1 bg-muted rounded text-xs">Mapbox</span>
                <span className="px-2 py-1 bg-muted rounded text-xs">GIS</span>
              </div>
              <Button size="sm" variant="ghost" className="w-full justify-between group-hover:bg-accent/10">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  Smart Tracking System
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Firebase-powered automation tools for inventory and asset tracking with real-time synchronization.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-muted rounded text-xs">Firebase</span>
                <span className="px-2 py-1 bg-muted rounded text-xs">Automation</span>
                <span className="px-2 py-1 bg-muted rounded text-xs">IoT</span>
              </div>
              <Button size="sm" variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors">
                  Mobile Trading App
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                React Native financial application with real-time market data and portfolio management features.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="px-2 py-1 bg-muted rounded text-xs">React Native</span>
                <span className="px-2 py-1 bg-muted rounded text-xs">FinTech</span>
                <span className="px-2 py-1 bg-muted rounded text-xs">Mobile</span>
              </div>
              <Button size="sm" variant="ghost" className="w-full justify-between group-hover:bg-secondary/10">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;