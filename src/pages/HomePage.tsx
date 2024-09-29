import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import HomeContainer from '../containers/HomeContainer';
import BioContainer from '../containers/BioContainer';
import SkillsContainer from '../containers/SkillsContainer';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // Simule un délai de chargement pour afficher le loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Affiche le loader pendant le chargement
      ) : (
        <>
          <HomeContainer />
          <BioContainer />
          <SkillsContainer />
        </>
      )}
    </>
  );
}
