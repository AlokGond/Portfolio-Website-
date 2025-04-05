import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('-FtubmD6ULbx2RjYS'); // Replace with your EmailJS public key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:your.email@example.com' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_h1k802q', // Replace with your EmailJS service ID
        'template_a70wk5b', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          to_name: 'Portfolio Owner'
        },
        '-FtubmD6ULbx2RjYS' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            <span className="text-neon-cyan neon-text">Get in</span> Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto text-center mb-12 text-slate-300 dark:text-slate-700"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 dark:bg-slate-300/50
                    border border-slate-700/50 dark:border-slate-400/50
                    focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50
                    transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 dark:bg-slate-300/50
                    border border-slate-700/50 dark:border-slate-400/50
                    focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50
                    transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 dark:bg-slate-300/50
                    border border-slate-700/50 dark:border-slate-400/50
                    focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50
                    transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full neon-button text-neon-cyan border-neon-cyan ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center mt-4"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center mt-4"
                >
                  Failed to send message. Please try again later.
                </motion.p>
              )}
            </motion.form>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center lg:items-start gap-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Connect with me
              </h3>
              
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-4 rounded-full bg-slate-800/50 dark:bg-slate-300/50
                      text-neon-cyan hover:text-neon-magenta transition-colors duration-300"
                  >
                    <link.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 text-center lg:text-left">
                <p className="text-lg mb-2">
                  <FaEnvelope className="inline-block mr-2 text-neon-cyan" />
                  your.email@example.com
                </p>
                <p className="text-slate-400 dark:text-slate-600">
                  Available for freelance opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;