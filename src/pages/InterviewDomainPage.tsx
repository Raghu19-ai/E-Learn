import { useParams } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Download, Play, Clock, CheckCircle } from "lucide-react";

const InterviewDomainPage = () => {
  const { domain } = useParams();
  
  const domainData: { [key: string]: any } = {
    "computer-science": {
      name: "Computer Science",
      icon: "💻",
      description: "Master CS fundamentals and crack technical interviews at top tech companies",
      topics: [
        {
          category: "Data Structures",
          items: [
            { name: "Arrays and Strings", difficulty: "Easy", time: "2 hours", completed: true },
            { name: "Linked Lists", difficulty: "Medium", time: "3 hours", completed: true },
            { name: "Trees and Graphs", difficulty: "Hard", time: "5 hours", completed: false },
            { name: "Hash Tables", difficulty: "Medium", time: "2.5 hours", completed: false }
          ]
        },
        {
          category: "Algorithms",
          items: [
            { name: "Sorting and Searching", difficulty: "Medium", time: "4 hours", completed: true },
            { name: "Dynamic Programming", difficulty: "Hard", time: "6 hours", completed: false },
            { name: "Graph Algorithms", difficulty: "Hard", time: "5 hours", completed: false },
            { name: "Greedy Algorithms", difficulty: "Medium", time: "3 hours", completed: false }
          ]
        },
        {
          category: "System Design",
          items: [
            { name: "Scalability Fundamentals", difficulty: "Medium", time: "3 hours", completed: false },
            { name: "Database Design", difficulty: "Hard", time: "4 hours", completed: false },
            { name: "Load Balancing", difficulty: "Hard", time: "3.5 hours", completed: false }
          ]
        }
      ],
      notes: [
        { title: "Complete DSA Handbook", type: "PDF", size: "2.5 MB" },
        { title: "System Design Patterns", type: "PDF", size: "1.8 MB" },
        { title: "Interview Cheat Sheet", type: "PDF", size: "500 KB" },
        { title: "Coding Best Practices", type: "PDF", size: "1.2 MB" }
      ]
    },
    "electrical-engineering": {
      name: "Electrical Engineering",
      icon: "⚡",
      description: "Master electrical engineering concepts for technical interviews",
      topics: [
        {
          category: "Circuit Analysis",
          items: [
            { name: "AC/DC Circuit Analysis", difficulty: "Medium", time: "3 hours", completed: true },
            { name: "Network Theorems", difficulty: "Medium", time: "2.5 hours", completed: false },
            { name: "Laplace Transform Applications", difficulty: "Hard", time: "4 hours", completed: false }
          ]
        },
        {
          category: "Power Systems",
          items: [
            { name: "Power Generation", difficulty: "Medium", time: "3 hours", completed: false },
            { name: "Transmission Lines", difficulty: "Hard", time: "4 hours", completed: false },
            { name: "Protection Systems", difficulty: "Hard", time: "3.5 hours", completed: false }
          ]
        }
      ],
      notes: [
        { title: "Circuit Analysis Guide", type: "PDF", size: "3.2 MB" },
        { title: "Power Systems Handbook", type: "PDF", size: "4.1 MB" },
        { title: "Control Systems Notes", type: "PDF", size: "2.8 MB" }
      ]
    }
  };

  const currentDomain = domainData[domain || ""] || domainData["computer-science"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/20 text-success";
      case "Medium": return "bg-accent/20 text-accent";
      case "Hard": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{currentDomain.icon}</div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {currentDomain.name} Interview Prep
            </h1>
            <p className="text-xl text-muted-foreground">
              {currentDomain.description}
            </p>
          </div>

          <Tabs defaultValue="topics" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="topics">Study Topics</TabsTrigger>
              <TabsTrigger value="notes">Reference Notes</TabsTrigger>
              <TabsTrigger value="practice">Practice Tests</TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="space-y-8">
              {currentDomain.topics.map((category: any, categoryIndex: number) => (
                <Card key={categoryIndex} className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-full ${item.completed ? 'bg-success' : 'bg-muted'}`}>
                              <CheckCircle className={`h-4 w-4 ${item.completed ? 'text-white' : 'text-muted-foreground'}`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{item.name}</h4>
                              <div className="flex items-center space-x-3 mt-1">
                                <Badge className={getDifficultyColor(item.difficulty)}>
                                  {item.difficulty}
                                </Badge>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span>{item.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button 
                            className={item.completed ? "bg-success" : "bg-gradient-primary"}
                            disabled={item.completed}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            {item.completed ? "Completed" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="notes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentDomain.notes.map((note: any, index: number) => (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-primary rounded-lg p-3">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{note.title}</h3>
                          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                            <span>{note.type}</span>
                            <span>•</span>
                            <span>{note.size}</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-secondary">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practice" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Mock Interview - Easy", questions: 10, time: "45 min", difficulty: "Easy" },
                  { name: "Mock Interview - Medium", questions: 8, time: "60 min", difficulty: "Medium" },
                  { name: "Mock Interview - Hard", questions: 5, time: "90 min", difficulty: "Hard" },
                  { name: "Technical Round Practice", questions: 15, time: "75 min", difficulty: "Mixed" },
                  { name: "HR Round Practice", questions: 12, time: "30 min", difficulty: "Easy" },
                  { name: "Final Assessment", questions: 20, time: "120 min", difficulty: "Mixed" }
                ].map((test, index) => (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{test.name}</CardTitle>
                      <Badge className={getDifficultyColor(test.difficulty)}>
                        {test.difficulty}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Questions:</span>
                          <span className="font-medium">{test.questions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{test.time}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-primary">
                        Start Test
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default InterviewDomainPage;