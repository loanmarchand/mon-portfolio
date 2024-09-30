import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TitlePage from '../components/TitlePage.tsx';

export default function HomeContainer() {
  const { t } = useTranslation();
  return (
    <section id="home" className="py-20">
      <motion.div
        className="container mx-auto text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TitlePage title={t('welcome')} />
        <p className="text-xl mb-12">{t('discover')}</p>
        <Link
          to="/Projects"
          className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
        >
          {t('projects')}
        </Link>
      </motion.div>
    </section>
  );
}
