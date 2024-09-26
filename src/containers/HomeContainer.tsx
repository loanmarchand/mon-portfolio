import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function HomeContainer()
{
  const { t } = useTranslation();
  return (
        <section id="home" className="bg-gray-100 py-20">
            <motion.div
                className="container mx-auto text-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
              <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
              <p className="text-lg mb-8">{t('discover')}</p>
                <Link
                    to="/Projects"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  {t('projects')}
                </Link>
            </motion.div>
        </section>
    );
}