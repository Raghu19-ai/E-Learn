import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Engineering
            <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Join thousands of engineering students advancing their careers through 
            our comprehensive learning platform designed specifically for technical minds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground shadow-strong hover:shadow-accent text-lg px-8 py-4">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#why-us">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-8 py-4">
                Discover More
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookOpen className="h-12 w-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">500+ Courses</h3>
              <p className="text-white/80">Comprehensive curriculum covering all engineering domains</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-12 w-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-white/80">Learn from industry professionals and academic leaders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="h-12 w-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Certified Learning</h3>
              <p className="text-white/80">Earn industry-recognized certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;