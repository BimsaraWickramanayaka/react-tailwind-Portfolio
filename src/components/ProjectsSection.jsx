import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Search App",
    description: "A functional Movie Search app using React and Tailwind.",
    image: "/projects/movie.png",
    tags: ["React", "TailwindCSS", "Appwrite"],
    demoUrl: "https://www.linkedin.com/posts/bimsara-wickramanayaka-7a8810266_react-movie-search-app-a-modern-full-stack-activity-7378414743528640512-2Fnd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFClXABCaszX757eFuzDKA8w9YhB7RzgdY",
    githubUrl: "https://github.com/BimsaraWickramanayaka/Movie_search_app.git",
  },
  {
    id: 2,
    title: "AgriGrow Mobile App",
    description:
      "Interactive mobile app with data visualization and filtering capabilities.",
    image: "/projects/mobile.png",
    tags: ["Flutter", ".NET", "PostgreSQL"],
    demoUrl: "https://www.linkedin.com/posts/bimsara-wickramanayaka-7a8810266_agriculture-project-smart-crop-planner-activity-7365630838140530689-PGgU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFClXABCaszX757eFuzDKA8w9YhB7RzgdY",
    githubUrl: "https://github.com/KavinduAluthwaththa/Capstone-Project-Frontend.git",
  },
  {
    id: 3,
    title: "ThinkPad",
    description:
      "MERN Stack Note taking web app to take notes as you like.",
    image: "/projects/notepad.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://www.linkedin.com/posts/bimsara-wickramanayaka-7a8810266_excited-to-share-my-latest-project-thinkboard-activity-7380162449183928320-PZvc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFClXABCaszX757eFuzDKA8w9YhB7RzgdY",
    githubUrl: "https://github.com/BimsaraWickramanayaka/mern-thinkboard.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/BimsaraWickramanayaka"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};