
import { Calendar, Award, BookOpen } from 'lucide-react';

type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'certification';
};

const Experience = () => {
  const timelineItems: TimelineItem[] = [
    {
      title: "GCE Ordinary Level",
      organization: "Methodist Collage Rawathawatta",
      period: "2011 - 2022",
      description: "",
      type: "education",
    },
    {
      title: "Software Engineering (BSc)",
      organization: "University of Westminster",
      period: "2022 - Present",
      description: "Currently in my 3rd year of studies, focusing on software development, algorithms, and Machine Learning.",
      type: "education",
    },
    {
      title: "Certificates and license ",
      organization: "Linkedin",
      period: "2022 - Present",
      description: "Completed several educational certificates in frameworks, databases, and object-oriented programming (OOP).",
      type: "certification",
    },
    {
      title: "Competition Winner",
      organization: "Informatics Institute of Technology",
      period: "2022 - Present",
      description: "Our team won the competition through strong collaboration and innovative problem-solving. Our success reflects our dedication, skill, and effective teamwork.",
      type: "experience",
    },
    {
      title: "Web Development Course",
      organization: "Coding Bootcamp",
      period: "2024 September",
      description: "Learned front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, and MongoDB.",
      type: "education",
    },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'education':
        return <BookOpen size={20} className="text-portfolio-blue" />;
      case 'certification':
        return <Award size={20} className="text-portfolio-blue" />;
      default:
        return <Calendar size={20} className="text-portfolio-blue" />;
    }
  };

  return (
    <section id="experience" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My academic and professional journey</p>
        
        <div className="relative max-w-3xl mx-auto pt-8">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-12 animate-fade-up ${
                index % 2 === 0 ? 'sm:pr-12 sm:mr-1/2' : 'sm:pl-12 sm:ml-1/2'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="p-1.5 bg-portfolio-blue-light rounded-md mr-3">
                    {getIcon(item.type)}
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-portfolio-blue-dark">{item.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{item.organization}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              
              {/* Circle on the timeline */}
              <div className="absolute top-6 left-4 sm:left-1/2 w-4 h-4 bg-portfolio-blue rounded-full transform -translate-x-1/2 border-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
