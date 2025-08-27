import { Card, CardContent } from "@/components/ui/card";
import { Heart, Compass, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Our Story & Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from the vision to revolutionize engineering education and bridge the gap 
              between academic learning and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-primary text-white border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-4">Our Passion</h3>
                <p className="text-white/90 leading-relaxed">
                  We believe every engineering student deserves access to world-class education 
                  that prepares them for real-world challenges and innovations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary text-white border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <Compass className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                <p className="text-white/90 leading-relaxed">
                  Founded by engineering graduates who experienced firsthand the challenges 
                  of transitioning from academia to industry leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent text-white border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="text-white/90 leading-relaxed">
                  Empowering the next generation of engineers to build solutions for 
                  tomorrow's challenges with cutting-edge skills and knowledge.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              What Made Us Choose This Path?
            </h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                After graduating from top engineering institutions, our founders noticed a significant gap 
                between what students learn in classrooms and what they need to excel in their careers. 
                Traditional education often lacks the practical, industry-relevant skills that today's 
                engineering roles demand.
              </p>
              <p className="mb-4">
                We witnessed talented graduates struggling to adapt to workplace technologies, 
                methodologies, and problem-solving approaches. This inspired us to create a platform 
                that bridges this gap by offering:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• <strong>Real-world project experience</strong> with industry-standard tools</li>
                <li>• <strong>Mentorship from practicing engineers</strong> across various domains</li>
                <li>• <strong>Adaptive learning paths</strong> based on individual career goals</li>
                <li>• <strong>Collaborative learning environment</strong> that mimics engineering teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;