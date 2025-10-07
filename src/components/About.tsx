import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Server, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 px-6 flex-1 flex items-center">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated professional with expertise spanning software
            development and IT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 to-emerald-500/12 rounded-2xl blur-xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTkxNjU4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern workspace setup"
              className="relative z-10 w-full h-96 object-cover rounded-2xl border border-white/25 shadow-2xl"
            />
          </motion.div>

          {/* Text & Skills */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With a unique blend of software development skills and IT support
              expertise, I bring a comprehensive approach to technology
              solutions. My journey spans from writing clean, efficient code to
              managing complex IT infrastructures.
            </p>

            <p className="text-lg leading-relaxed">
              I thrive on solving complex problems, whether it's debugging code,
              optimizing system performance, or helping teams leverage
              technology to achieve their goals. My dual expertise allows me to
              understand both the development and operational sides of
              technology projects.
            </p>

            {/* Skills Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: Code,
                  title: "Development",
                  desc: "Full-stack solutions",
                  gradient: "from-green-400 to-emerald-500",
                },
                {
                  icon: Server,
                  title: "IT Support",
                  desc: "System administration",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  desc: "Team player",
                  gradient: "from-teal-500 to-green-600",
                },
                {
                  icon: Award,
                  title: "Quality",
                  desc: "Best practices",
                  gradient: "from-green-600 to-emerald-700",
                },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card p-4 rounded-xl group hover:scale-105 transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
