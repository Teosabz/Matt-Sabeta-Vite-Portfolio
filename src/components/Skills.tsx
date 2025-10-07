import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Code2, Database, Globe, Monitor, Shield, Wrench } from "lucide-react";

export function Skills() {
  const developmentSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "Supabase",
    "Firebase",
    "Git",
    "Github",
    "REST APIs",
    "HTML/CSS",
    "Tailwind CSS",
  ];

  const itSupportSkills = [
    "Windows Server",
    "Active Directory",
    "Network Configuration",
    "Troubleshooting",
    "Hardware Support",
    "Virtualization",
    "Backup Solutions",
    "Security Management",
    "Help Desk",
    "Remote Support",
    "System Monitoring",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set covering both software development and IT
            infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Development Skills */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Software Development</CardTitle>
                  <CardDescription>
                    Full-stack development with modern technologies
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {developmentSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <span>Web Applications & APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-muted-foreground" />
                  <span>Database Design & Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-muted-foreground" />
                  <span>Responsive UI/UX Development</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* IT Support Skills */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>IT Support & Administration</CardTitle>
                  <CardDescription>
                    System administration and technical support
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {itSupportSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <span>Network Security & Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-muted-foreground" />
                  <span>System Optimization & Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-muted-foreground" />
                  <span>Hardware & Software Troubleshooting</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combined Expertise */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="font-medium">
              DevOps Mindset: Bridging Development & Operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
