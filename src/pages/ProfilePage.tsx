import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, TrendingUp } from "lucide-react";

const ProfilePage = () => {
  const userStats = [
    { label: "Courses Completed", value: "7", icon: BookOpen, color: "bg-gradient-primary" },
    { label: "Certificates Earned", value: "5", icon: Award, color: "bg-gradient-secondary" },
    { label: "Study Hours", value: "142", icon: TrendingUp, color: "bg-gradient-accent" },
    { label: "Interview Preps", value: "12", icon: User, color: "bg-success" }
  ];

  const recentCertificates = [
    { name: "Data Structures Mastery", date: "Dec 2024", domain: "Computer Science" },
    { name: "Circuit Analysis Expert", date: "Nov 2024", domain: "Electronics" },
    { name: "Fluid Mechanics Pro", date: "Oct 2024", domain: "Mechanical" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Information */}
            <div className="lg:col-span-1">
              <Card className="shadow-medium">
                <CardHeader className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-primary text-white text-xl">JD</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl">John Doe</CardTitle>
                  <p className="text-muted-foreground">Computer Science Student</p>
                  <Badge className="bg-primary/20 text-primary mt-2">Premium Member</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">john.doe@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">New York, USA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined March 2024</span>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-primary">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Stats and Activity */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {userStats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-soft">
                    <CardContent className="p-4">
                      <div className={`${stat.color} rounded-lg p-3 w-fit mx-auto mb-3`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Certificates */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Recent Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCertificates.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-foreground">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.domain}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{cert.date}</p>
                          <Badge variant="outline" className="mt-1">Verified</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Account Settings */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input defaultValue="John" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input defaultValue="Doe" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input defaultValue="john.doe@email.com" type="email" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input defaultValue="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-gradient-primary">Save Changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;