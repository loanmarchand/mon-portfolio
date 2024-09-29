import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Flag from 'react-world-flags';

export default function Header() {
    const { t } = useTranslation();
    const location = useLocation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isActive = (path: string) => location.pathname === path ? 'text-yellow-300' : 'text-white';

    return (
      <motion.header
        className="bg-gradient-to-r from-black via-black to-pink-600 p-4 fixed top-0 w-full z-50 shadow-lg border-b"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
          <div className="container mx-auto flex justify-between items-center">
              <Link to="/"
                    className="text-white text-3xl font-bold tracking-wider hover:scale-105 transition-transform">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  >
                      Loan Marchand
                  </motion.div>
              </Link>

              <nav className="space-x-8 text-lg">
                  <Link to="/" className={`${isActive('/')} hover:text-yellow-300 transition duration-300 ease-in-out`}>
                      Home
                  </Link>
                  <Link to="/Projects"
                        className={`${isActive('/Projects')} hover:text-yellow-300 transition duration-300 ease-in-out`}>
                      {t('projects')}
                  </Link>
                  <Link to="/About"
                        className={`${isActive('/About')} hover:text-yellow-300 transition duration-300 ease-in-out`}>
                      {t('About')}
                  </Link>
                  <Link to="/Contact"
                        className={`${isActive('/Contact')} hover:text-yellow-300 transition duration-300 ease-in-out`}>
                      Contact
                  </Link>
              </nav>

              <div className="flex items-center space-x-4">
                  <div
                    onClick={() => changeLanguage('fr')}
                    className={`cursor-pointer transform transition-transform duration-200 hover:scale-110 ${i18n.language !== 'fr' ? 'opacity-50' : 'opacity-100'}`}
                  >
                      <Flag code="FR" style={{ width: '30px', height: '20px' }} />
                  </div>
                  <div
                    onClick={() => changeLanguage('en')}
                    className={`cursor-pointer transform transition-transform duration-200 hover:scale-110 ${i18n.language !== 'en' ? 'opacity-50' : 'opacity-100'}`}
                  >
                      <Flag code="GB" style={{ width: '30px', height: '20px' }} />
                  </div>
              </div>
          </div>
      </motion.header>
    );
}
