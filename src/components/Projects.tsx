import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
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

  const projects = [
    {
      title: 'Project One',
      description: 'A modern web application built with React and Node.js, featuring real-time updates and a responsive design.',
      image: '/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with advanced filtering, search, and payment integration using modern web technologies.',
      image: '/project2.jpg',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com'
    },
    {
      title: 'Project Three',
      description: 'A social media dashboard with analytics and data visualization using modern charting libraries.',
      image: '/project3.jpg',
      tags: ['Vue.js', 'D3.js', 'Firebase', 'Sass'],
      github: 'https://github.com/yourusername/project3',
      demo: 'https://project3-demo.com'
    },
    {
      title: 'Project Four',
      description: 'A mobile-first web application for task management with offline capabilities and cloud sync.',
      image: '/project4.jpg',
      tags: ['React Native', 'Redux', 'GraphQL', 'AWS'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://project4-demo.com'
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            <span className="text-neon-cyan neon-text">My</span> Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto text-center mb-12 text-slate-300 dark:text-slate-700"
          >
            Here are some of my recent projects that showcase my skills and experience
            in web development.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100
                    flex items-center justify-center gap-4 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-neon-cyan hover:scale-110 transition-transform"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-neon-magenta hover:scale-110 transition-transform"
                    >
                      <FaExternalLinkAlt className="text-2xl" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold mb-2 text-neon-cyan group-hover:text-neon-magenta
                  transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 dark:text-slate-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-slate-800/50 dark:bg-slate-300/50
                      text-neon-cyan dark:text-neon-violet"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;