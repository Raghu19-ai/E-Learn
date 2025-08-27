import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const InterviewPrepPage = () => {
  const domains = [
    {
      name: "Computer Science",
      icon: "💻",
      description: "DSA, System Design, Programming Languages",
      topics: 45,
      students: "2.8k",
      rating: 4.9,
      color: "border-primary/20 hover:border-primary/40"
    },
    {
      name: "Electrical Engineering",
      icon: "⚡",
      description: "Circuit Analysis, Power Systems, Control Systems",
      topics: 38,
      students: "1.5k",
      rating: 4.7,
      color: "border-secondary/20 hover:border-secondary/40"
    },
    {
      name: "Mechanical Engineering",
      icon: "⚙️",
      description: "Thermodynamics, Fluid Mechanics, Machine Design",
      topics: 42,
      students: "1.9k",
      rating: 4.8,
      color: "border-accent/20 hover:border-accent/40"
    },
    {
      name: "Civil Engineering",
      icon: "🏗️",
      description: "Structural Analysis, Construction Management, Materials",
      topics: 35,
      students: "1.2k",
      rating: 4.6,
      color: "border-success/20 hover:border-success/40"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Notes",
      description: "Detailed study materials and reference guides for each domain"
    },
    {
      icon: FileText,
      title: "Practice Questions",
      description: "Real interview questions with detailed solutions and explanations"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Expert-led video sessions covering key concepts and problem-solving"
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice with industry professionals and get personalized feedback"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Interview Preparation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master your engineering interviews with domain-specific preparation materials, practice questions, and expert guidance
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-lg p-3 w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Domain Selection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Choose Your Engineering Domain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className={`${domain.color} shadow-medium hover:shadow-strong transition-all duration-300 group cursor-pointer`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{domain.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {domain.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">{domain.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{domain.topics} Topics</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{domain.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{domain.rating}</span>
                    </div>
                  </div>
                  <Link to={`/interview-prep/${domain.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full bg-gradient-primary group-hover:shadow-medium transition-all duration-300">
                      Start Preparation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of engineering students who have successfully landed their dream jobs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepPage;