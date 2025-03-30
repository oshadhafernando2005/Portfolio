
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Pawsome – AI-Powered Pet Care App",
      description: "An intelligent mobile application that helps pet owners monitor their pets' health, behavior, and needs using AI-powered analysis.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      technologies: ["Flutter", "Django", "Firebase", "Machine Learning"],
      liveLink: "#",
      githubLink: "https://github.com/Sanjana-Sanjeevan/Pawsome",
    },
    {
      title: "Flutter-Django AI Chatbot",
      description: "A versatile chatbot powered by Gemini AI, built with Flutter frontend and Django backend using WebSocket for real-time communication.",
      image: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      technologies: ["Flutter", "Django", "Gemini AI", "WebSocket"],
      liveLink: "#",
      githubLink: "https://github.com/Sanjana-Sanjeevan/Pawsome",
    },
    {
      title: "Ticket Management System",
      description: "A comprehensive system for managing support tickets, user requests, and team assignments with real-time updates and notifications.",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRpY2tldCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      liveLink: "#",
      githubLink: "https://github.com/oshadhafernando2005/Ticketing-System",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card overflow-hidden h-full border border-gray-200 hover:shadow-lg transition-shadow bg-white animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              
              <div className="card-header">
                <h3 className="text-xl font-semibold text-portfolio-blue-dark">{project.title}</h3>
              </div>
              
              <div className="card-content">
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-portfolio-blue-light text-portfolio-blue-dark text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="card-footer justify-between">
                <a 
                  href={project.liveLink} 
                  className="inline-flex items-center text-portfolio-blue hover:text-portfolio-blue-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  className="inline-flex items-center text-portfolio-blue hover:text-portfolio-blue-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
