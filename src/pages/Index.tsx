import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Users, Award, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Welcome to Your Learning Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Continue your engineering journey with personalized courses and recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-primary/20 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-primary rounded-lg p-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-muted-foreground">Courses in Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-secondary rounded-lg p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-muted-foreground">Average Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-accent rounded-lg p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">7</p>
                  <p className="text-muted-foreground">Certificates Earned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/20 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-success rounded-lg p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2.4k</p>
                  <p className="text-muted-foreground">Study Group Members</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-foreground">Continue Learning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Advanced Data Structures", progress: 78, domain: "Computer Science" },
                  { title: "Circuit Analysis", progress: 45, domain: "Electrical Engineering" },
                  { title: "Fluid Mechanics", progress: 92, domain: "Mechanical Engineering" },
                ].map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">{course.domain}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{course.progress}%</p>
                        <div className="w-20 h-2 bg-border rounded-full">
                          <div 
                            className="h-2 bg-gradient-primary rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <Button size="sm" className="bg-gradient-primary">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-foreground">Recommended for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Machine Learning Fundamentals", type: "New Course" },
                  { title: "Digital Signal Processing", type: "Trending" },
                  { title: "Software Architecture Patterns", type: "Popular" },
                ].map((item, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all duration-200">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-accent mb-3">{item.type}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
