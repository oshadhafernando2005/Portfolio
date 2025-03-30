import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { toast } from "sonner"; 
import * as emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string; text: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS details
      const result = await emailjs.send(
        'service_a7wmelb',     // Email Service ID
        'template_4vupjoe',    // Email Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'oshadhafernando1234@gmail.com'
        },
        'ophzURbz2aXLZmZ6w'      // EmailJS Public Key
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in touch for collaborations or questions</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-md flex items-center gap-2 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
                
                {submitMessage && (
                  <p className={`mt-4 ${
                    submitMessage.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {submitMessage.text}
                  </p>
                )}
              </div>
            </form>
          </div>
          
          <div className="lg:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-portfolio-blue-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-portfolio-blue-light rounded-md">
                    <Mail size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:contact@example.com" className="text-portfolio-blue hover:underline">
                      oshadhafernando1234@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-portfolio-blue-light rounded-md">
                    <Phone size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a href="tel:+1234567890" className="text-portfolio-blue hover:underline">
                      +94 78 574 2630
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-portfolio-blue-light rounded-md">
                    <MapPin size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Sri Lanka, Colombo</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium text-gray-800 mb-3">Connect with me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/oshadha-fernando-a8b39b30a/" 
                      className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-portfolio-blue" />
                    </a>
                    <a 
                      href="https://github.com/oshadhafernando2005" 
                      className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="text-portfolio-blue" />
                    </a>
                    
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

export default Contact;
