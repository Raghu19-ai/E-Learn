import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Award, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About TechVoyage
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering the next generation of engineers through innovative learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="bg-gradient-primary rounded-lg p-3 w-fit">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide comprehensive, accessible, and innovative educational resources that prepare engineering students for successful careers in their chosen domains.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <div className="bg-gradient-secondary rounded-lg p-3 w-fit">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the leading platform for engineering education, bridging the gap between academic learning and industry requirements through specialized interview preparation and practical skills development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <div className="bg-gradient-accent rounded-lg p-3 w-fit">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A dedicated team of experienced engineers, educators, and industry professionals committed to delivering high-quality learning experiences tailored for engineering students.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <div className="bg-success rounded-lg p-3 w-fit">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over 10,000+ students successfully placed in top engineering companies through our comprehensive interview preparation and skill development programs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of engineering students who have transformed their careers with TechVoyage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;