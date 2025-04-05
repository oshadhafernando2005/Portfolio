
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-portfolio-blue-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue-dark mb-4">
            Software Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            AI & Web Enthusiast | Innovating One Line of Code at a Time
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Welcome to my portfolio! I'm a passionate software engineer specializing in web development and AI applications. Currently in my 3rd year of Software Engineering studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-primary rounded-md flex items-center gap-2">
              Hire Me
              <ArrowRight size={16} />
            </a>
            <a 
              href="/Oshadha Fernando.pdf" 
              className="btn btn-outline rounded-md flex items-center gap-2"
              download
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-portfolio-blue opacity-10 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-portfolio-blue-light flex items-center justify-center overflow-hidden">
              <img 
                src="https://drive.google.com/file/d/14GO6JfhD8ogb1LvdHHVeiFmsTbVfnCdR/view?usp=sharing" 
                alt="Profile" 
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
