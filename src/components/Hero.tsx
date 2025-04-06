import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ThemeContext } from '../App';

const Hero = () => {
  // Remove unused isDarkMode variable
  useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-100 dark:to-slate-200" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden neon-border"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/assets/profile-photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10" />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-neon-cyan neon-text">Hi, I'm</span>{' '}
          <span className="text-neon-magenta neon-text">Alok Gond</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-neon-violet neon-text"
        >
          I'm a Full Stack Developer
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-slate-300 dark:text-slate-700"
        >
          Passionate about creating beautiful, responsive, and user-friendly web applications
          with modern technologies and best practices.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
          >
            <button className="neon-button text-neon-cyan border-neon-cyan">
              View My Work
            </button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
          >
            <button className="neon-button text-neon-magenta border-neon-magenta">
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-cyan rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;