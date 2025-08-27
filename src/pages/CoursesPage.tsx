import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const CoursesPage = () => {
  const courses = [
    {
      title: "Data Structures and Algorithms",
      domain: "Computer Science",
      duration: "8 weeks",
      students: "2.5k",
      rating: 4.8,
      level: "Intermediate",
      description: "Master fundamental DSA concepts with hands-on practice and real interview problems."
    },
    {
      title: "Digital Circuit Design",
      domain: "Electronics",
      duration: "6 weeks",
      students: "1.2k",
      rating: 4.7,
      level: "Beginner",
      description: "Learn digital logic design, combinational and sequential circuits from basics."
    },
    {
      title: "Fluid Mechanics",
      domain: "Mechanical",
      duration: "10 weeks",
      students: "1.8k",
      rating: 4.9,
      level: "Advanced",
      description: "Comprehensive study of fluid properties, flow dynamics, and engineering applications."
    },
    {
      title: "Structural Analysis",
      domain: "Civil",
      duration: "12 weeks",
      students: "950",
      rating: 4.6,
      level: "Intermediate",
      description: "Analyze forces, moments, and structural behavior in various engineering structures."
    },
    {
      title: "Thermodynamics",
      domain: "Mechanical",
      duration: "8 weeks",
      students: "2.1k",
      rating: 4.8,
      level: "Intermediate",
      description: "Study energy transfer, heat engines, and thermodynamic cycles in engineering systems."
    },
    {
      title: "Control Systems",
      domain: "Electrical",
      duration: "9 weeks",
      students: "1.6k",
      rating: 4.7,
      level: "Advanced",
      description: "Design and analyze feedback control systems for engineering applications."
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success/20 text-success";
      case "Intermediate": return "bg-accent/20 text-accent";
      case "Advanced": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Engineering Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of engineering courses designed to enhance your skills and prepare you for industry success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">{course.domain}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary group-hover:shadow-medium transition-all duration-300">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-6 text-white/90">
              We're constantly adding new courses. Contact us to suggest a course or request custom training.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;