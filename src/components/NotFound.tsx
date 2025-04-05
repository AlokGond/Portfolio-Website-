import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-100 dark:to-slate-200" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-8xl md:text-9xl font-bold mb-8"
        >
          <span className="text-neon-cyan neon-text">4</span>
          <span className="text-neon-magenta neon-text">0</span>
          <span className="text-neon-cyan neon-text">4</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl mb-8 text-neon-violet neon-text"
        >
          Page Not Found
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-12 text-slate-300 dark:text-slate-700"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/">
            <button className="neon-button text-neon-cyan border-neon-cyan">
              Back to Home
            </button>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-neon-magenta/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};

export default NotFound;