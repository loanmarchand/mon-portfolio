import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Flag from 'react-world-flags';
import { useState } from 'react';

export default function Header() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Ajout d'un état pour contrôler le menu

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isActive = (path: string) => location.pathname === path ? 'text-yellow-300' : 'text-white';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Ouvre ou ferme le menu au clic
    };

    return (
      <motion.header
        className="bg-gradient-to-r from-black via-black to-pink-600 p-4 fixed top-0 w-full z-50 shadow-lg border-b"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
          <div className="container mx-auto flex justify-between items-center">
              <Link to="/"
                    className="text-white text-2xl md:text-3xl font-bold tracking-wider hover:scale-105 transition-transform">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  >
                      Loan Marchand
                  </motion.div>
              </Link>

              {/* Bouton hamburger visible sur mobile */}
              <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
              </button>

              {/* Navigation principale visible sur grand écran */}
              <nav className="hidden md:flex space-x-8 text-lg">
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

              {/* Menu déroulant pour mobile */}
              {isMenuOpen && (
                <nav
                  className="absolute top-full left-0 w-full bg-gradient-to-r from-black via-black to-pink-600 shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-6">
                        <li>
                            <Link to="/"
                                  className={`${isActive('/')} hover:text-yellow-300 transition duration-300 ease-in-out`}
                                  onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Projects"
                                  className={`${isActive('/Projects')} hover:text-yellow-300 transition duration-300 ease-in-out`}
                                  onClick={toggleMenu}>
                                {t('projects')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/About"
                                  className={`${isActive('/About')} hover:text-yellow-300 transition duration-300 ease-in-out`}
                                  onClick={toggleMenu}>
                                {t('About')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact"
                                  className={`${isActive('/Contact')} hover:text-yellow-300 transition duration-300 ease-in-out`}
                                  onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
              )}

              {/* Sélecteur de langues visible sur tous les écrans */}
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
