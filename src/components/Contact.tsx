
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Replace with your email address
      const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error opening your email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:shadow-3xl hover:border-pink-400/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-200 transition-colors duration-300">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-200 transition-colors duration-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-200 transition-colors duration-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                placeholder="What's this about?"
              />
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-200 transition-colors duration-300">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none hover:bg-white/10 hover:border-white/30"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:-translate-y-1"
              >
                <Mail className="mr-2 hover:rotate-12 transition-transform duration-300" size={20} />
                {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              You can also reach me directly at:{' '}
              <a href="mailto:tskarthikathreya@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline">
                tskarthikathreya@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
