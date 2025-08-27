import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team for any questions or support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="Enter your first name" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Enter your last name" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input placeholder="Enter your email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="Enter subject" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea placeholder="Enter your message" rows={6} className="mt-1" />
                  </div>
                  <Button className="w-full bg-gradient-primary">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="bg-gradient-primary rounded-lg p-3 w-fit">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">support@techvoyage.com</p>
                  <p className="text-muted-foreground">info@techvoyage.com</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="bg-gradient-secondary rounded-lg p-3 w-fit">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="bg-gradient-accent rounded-lg p-3 w-fit">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    123 Tech Street<br />
                    Innovation District<br />
                    Tech City, TC 12345
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="bg-success rounded-lg p-3 w-fit">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;