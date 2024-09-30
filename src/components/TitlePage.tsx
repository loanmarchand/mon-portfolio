import { motion } from 'framer-motion';

export default function TitlePage({ title }: { title: string }) {
  return (
    <motion.h1
      className="text-5xl font-extrabold text-center text-white mb-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {title}
    </motion.h1>
  );

}