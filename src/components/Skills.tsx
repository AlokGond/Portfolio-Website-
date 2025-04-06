import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]' },
    { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]' },
    { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-neon-cyan neon-text">My</span> Skills
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto mb-12 text-slate-300 dark:text-slate-700"
          >
            I specialize in modern web technologies and frameworks, with a focus on
            building scalable and maintainable applications.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-slate-900/50 dark:bg-slate-200/50
                  border border-slate-700/50 dark:border-slate-300/50
                  hover:border-neon-cyan transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <skill.icon className={`text-5xl ${skill.color} skill-icon`} />
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-magenta/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;