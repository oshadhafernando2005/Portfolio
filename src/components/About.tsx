
import { Code, Coffee, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/5 animate-fade-up">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate software engineer with a strong focus on creating innovative solutions that solve real-world problems. Currently in my third year of Software Engineering, I've developed a deep interest in web development, mobile applications, and artificial intelligence.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My technical journey has equipped me with expertise in various technologies including Python, Flutter, Django, React, and more. I love working on challenging projects that push me to learn new skills and improve existing ones.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
          </div>
          
          <div className="lg:w-2/5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-portfolio-blue-light to-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-portfolio-blue-dark mb-4">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-md shadow-sm">
                    <Code size={24} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Languages & Frameworks</h4>
                    <p className="text-gray-600">Python, JavaScript, Flutter, Django, React</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-md shadow-sm">
                    <BookOpen size={24} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Education</h4>
                    <p className="text-gray-600">3rd Year Software Engineering Student</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-md shadow-sm">
                    <Coffee size={24} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Interests</h4>
                    <p className="text-gray-600">AI, Web Development, Open Source, Tech Mentoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
