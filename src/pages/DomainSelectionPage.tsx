import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Zap, 
  Cog, 
  Wrench, 
  Plane, 
  Building,
  Atom,
  Beaker,
  Code,
  Wifi
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DomainSelectionPage = () => {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const domains = [
    {
      id: "computer-science",
      name: "Computer Science & Engineering",
      icon: Cpu,
      description: "Software development, algorithms, data structures, AI/ML"
    },
    {
      id: "electrical",
      name: "Electrical Engineering",
      icon: Zap,
      description: "Power systems, electronics, control systems, circuits"
    },
    {
      id: "mechanical",
      name: "Mechanical Engineering",
      icon: Cog,
      description: "Thermodynamics, fluid mechanics, design, manufacturing"
    },
    {
      id: "civil",
      name: "Civil Engineering",
      icon: Building,
      description: "Structural design, construction, infrastructure, materials"
    },
    {
      id: "aerospace",
      name: "Aerospace Engineering",
      icon: Plane,
      description: "Aircraft design, propulsion, aerodynamics, space systems"
    },
    {
      id: "chemical",
      name: "Chemical Engineering",
      icon: Beaker,
      description: "Process design, reaction engineering, materials science"
    },
    {
      id: "biomedical",
      name: "Biomedical Engineering",
      icon: Atom,
      description: "Medical devices, biomaterials, tissue engineering"
    },
    {
      id: "industrial",
      name: "Industrial Engineering",
      icon: Wrench,
      description: "Operations research, quality control, supply chain"
    },
    {
      id: "telecommunications",
      name: "Telecommunications",
      icon: Wifi,
      description: "Network systems, signal processing, communication protocols"
    },
    {
      id: "software",
      name: "Software Engineering",
      icon: Code,
      description: "Software architecture, development methodologies, testing"
    }
  ];

  const toggleDomain = (domainId: string) => {
    setSelectedDomains(prev => {
      if (prev.includes(domainId)) {
        return prev.filter(id => id !== domainId);
      } else if (prev.length < 4) {
        return [...prev, domainId];
      } else {
        toast({
          title: "Maximum Selection Reached",
          description: "You can select up to 4 domains of interest",
          variant: "destructive",
        });
        return prev;
      }
    });
  };

  const handleContinue = () => {
    if (selectedDomains.length < 3) {
      toast({
        title: "Please select more domains",
        description: "Choose at least 3 areas of interest to continue",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Perfect!",
      description: "Your learning path is being customized based on your interests",
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Learning Path
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Select 3-4 engineering domains that interest you most. We'll customize your 
              learning experience based on your choices.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Badge variant="secondary" className="bg-accent/20 text-white border-white/20">
                {selectedDomains.length} / 4 selected
              </Badge>
              <span className="text-white/70">
                (Minimum 3 required)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {domains.map((domain) => {
              const isSelected = selectedDomains.includes(domain.id);
              const IconComponent = domain.icon;
              
              return (
                <Card
                  key={domain.id}
                  className={`cursor-pointer transition-all duration-300 border-2 ${
                    isSelected
                      ? "border-accent bg-accent/10 shadow-strong scale-105"
                      : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40"
                  }`}
                  onClick={() => toggleDomain(domain.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                      isSelected ? "bg-accent" : "bg-white/10"
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        isSelected ? "text-white" : "text-accent"
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {domain.name}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {domain.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={handleContinue}
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-strong px-12 py-4 text-lg"
              disabled={selectedDomains.length < 3}
            >
              Continue to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSelectionPage;