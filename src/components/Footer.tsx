import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <p className="text-slate-300 dark:text-slate-700 flex items-center justify-center gap-2">
          Made with{' '}
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-neon-magenta inline-block"
          >
            <FaHeart className="w-4 h-4" />
          </motion.span>{' '}
          by{' '}
          <span className="text-neon-cyan neon-text">Alok Gond</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;