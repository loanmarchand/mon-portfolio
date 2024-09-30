import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div
      className="relative bg-gradient-to-br from-black via-black to-pink-600 min-h-screen flex flex-col justify-center items-center overflow-hidden">

      {/* Animation de fond avec des particules */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-xl animate-ping"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
      </div>

      {/* Texte principal */}
      <motion.h1
        className="text-9xl font-extrabold text-yellow-400 z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 200 }}
      >
        404
      </motion.h1>

      {/* Message de page non trouvée */}
      <motion.p
        className="text-2xl text-gray-200 z-10 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        {t('404')}
      </motion.p>

      {/* Bouton de retour à la page d'accueil */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, type: 'spring', stiffness: 120 }}
      >
        <Link
          to="/"
          className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-300"
        >
          {t('back_home')}
        </Link>
      </motion.div>
    </div>
  );
}
