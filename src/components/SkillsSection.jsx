import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", logo: "/logos/html5.svg" },
  { name: "JavaScript", level: 90, category: "frontend", logo: "/logos/javascript.svg" },
  { name: "React", level: 90, category: "frontend", logo: "/logos/react.svg" },
  // { name: "TypeScript", level: 85, category: "frontend", logo: "/logos/react.svg" },
  { name: "Tailwind CSS", level: 90, category: "frontend", logo: "/logos/tailwindcss.svg" },
  // { name: "Next.js", level: 80, category: "frontend", logo: "/logos/nextjs.svg" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", logo: "/logos/node.svg" },
  { name: "Express", level: 75, category: "backend", logo: "/logos/express.svg" },
  { name: "MongoDB", level: 70, category: "backend", logo: "/logos/mongodb.svg" },
  { name: "PostgreSQL", level: 65, category: "backend", logo: "/logos/postgresql.svg" },
  // { name: "GraphQL", level: 60, category: "backend", logo: "/logos/graphql.svg" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", logo: "/logos/github.svg" },
  { name: "Docker", level: 70, category: "tools", logo: "/logos/docker.svg" },
  { name: "Figma", level: 85, category: "tools", logo: "/logos/figma.svg" },
  { name: "VS Code", level: 95, category: "tools", logo: "/logos/vscode.svg" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="mb-6 flex flex-col items-center text-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <div className="mt-3">
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={skill.name + " logo"}
                      className="h-12 w-auto md:h-14 md:w-auto"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                {/* <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                /> */}
              </div>

              {/* <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
