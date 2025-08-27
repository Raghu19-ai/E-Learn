import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const navigation = isLandingPage 
    ? [
        { name: "Home", href: "#home" },
        { name: "Why Us", href: "#why-us" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ]
    : [
        { name: "Home", href: "/dashboard" },
        { name: "Courses", href: "/courses" },
        { name: "Interview Prep", href: "/interview-prep" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Profile", href: "/profile" },
      ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechVoyage
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {isLandingPage && (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-primary shadow-soft hover:shadow-medium transition-all duration-300">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;