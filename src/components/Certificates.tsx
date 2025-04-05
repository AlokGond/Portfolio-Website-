import { motion } from 'framer-motion';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    issuer: 'Udemy',
    date: 'March 2024',
    image: '/certificates/placeholder.svg'
  },
  {
    id: 2,
    title: 'React & Next.js Mastery',
    issuer: 'Coursera',
    date: 'February 2024',
    image: '/certificates/placeholder.svg'
  },
  {
    id: 3,
    title: 'Advanced TypeScript',
    issuer: 'Frontend Masters',
    date: 'January 2024',
    image: '/certificates/placeholder.svg'
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: 'December 2023',
    image: '/certificates/placeholder.svg'
  },
  {
    id: 5,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon',
    date: 'November 2023',
    image: '/certificates/placeholder.svg'
  },
  {
    id: 6,
    title: 'Data Structures & Algorithms',
    issuer: 'LeetCode',
    date: 'October 2023',
    image: '/certificates/placeholder.svg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(10, 165, 233, 0.5)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-900 dark:bg-slate-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-5xl font-space-grotesk text-center mb-12 neon-text"
        >
          Certificates & Achievements
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-slate-900/80 dark:bg-slate-200/80 backdrop-blur-sm rounded-xl overflow-hidden neon-border group"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-space-grotesk font-semibold text-neon-cyan dark:text-neon-magenta mb-2 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-slate-300 dark:text-slate-700 font-inter text-sm mb-2 transition-colors duration-300">
                  {cert.issuer}
                </p>
                <p className="text-neon-magenta dark:text-neon-cyan text-sm font-fira-code transition-colors duration-300">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;