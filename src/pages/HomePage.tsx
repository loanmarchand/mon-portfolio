import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import HomeContainer from '../containers/HomeContainer';
import BioContainer from '../containers/BioContainer';
import SkillsContainer from '../containers/SkillsContainer';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-black to-pink-600 min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <HomeContainer />
          <BioContainer />
          <SkillsContainer />
        </motion.div>
      )}
    </div>
  );
}
