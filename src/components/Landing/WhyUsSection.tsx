import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Target, 
  Rocket, 
  Code, 
  Brain, 
  TrendingUp 
} from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovative Learning Approach",
      description: "Our unique methodology combines theoretical knowledge with hands-on practical experience, ensuring deep understanding of engineering concepts."
    },
    {
      icon: Target,
      title: "Industry-Focused Curriculum",
      description: "Content designed by industry experts to bridge the gap between academic learning and real-world engineering challenges."
    },
    {
      icon: Rocket,
      title: "Career Acceleration",
      description: "Fast-track your engineering career with our structured learning paths and professional development programs."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Master cutting-edge technologies and tools used in modern engineering practices across all domains."
    },
    {
      icon: Brain,
      title: "Personalized Learning",
      description: "AI-powered recommendations and adaptive learning paths tailored to your interests and career goals."
    },
    {
      icon: TrendingUp,
      title: "Proven Success Rate",
      description: "95% of our students report improved technical skills and career advancement within 6 months."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose TechVoyage?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another e-learning platform. We're your partners in engineering excellence, 
            designed specifically for the unique challenges and opportunities in technical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;