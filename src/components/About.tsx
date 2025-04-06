import { motion } from 'framer-motion';

const About = () => {
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden neon-border border-neon-cyan">
              <img
                src="/assets/profile-photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-neon-magenta" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-neon-violet" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-neon-cyan neon-text">About</span> Me
            </h2>
            
            <div className="space-y-4 text-lg text-slate-300 dark:text-slate-700">
              <p>
                Hello! I'm a passionate Full Stack Developer with a keen eye for design
                and a love for creating seamless user experiences. With expertise in
                modern web technologies, I bring ideas to life through clean,
                efficient code and intuitive interfaces.
              </p>
              
              <p>
                My journey in web development started [X] years ago, and since then,
                I've had the opportunity to work on diverse projects ranging from
                small business websites to complex web applications.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentoring.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8"
            >
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '100%', label: 'Success Rate' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-slate-900/50 dark:bg-slate-200/50
                  border border-slate-700/50 dark:border-slate-300/50 hover:border-neon-cyan
                  transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-neon-cyan neon-text">{stat.number}</div>
                  <div className="text-sm text-slate-400 dark:text-slate-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;