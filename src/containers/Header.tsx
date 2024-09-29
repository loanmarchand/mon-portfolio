import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Flag from 'react-world-flags';

export default function Header() {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(r => console.log(r));
    };

    return (
      <motion.header
        className="bg-gray-800 p-4 fixed top-0 w-full z-50"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
          <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-white text-2xl font-bold">
                  Loan Marchand
              </Link>
              <nav className="space-x-4">
                  <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                  <Link to="/Projects" className="text-gray-300 hover:text-white">{t('projects')}</Link>
                  <Link to="/About" className="text-gray-300 hover:text-white">{t('About')}</Link>
                  <Link to="/Contact" className="text-gray-300 hover:text-white">Contact</Link>
              </nav>
              <div className="text-white flex items-center space-x-2">
                  <div
                    onClick={() => changeLanguage('fr')}
                    className={`cursor-pointer ${i18n.language !== 'fr' ? 'opacity-50' : 'opacity-100'}`}
                  >
                      <Flag code="FR" style={{ width: '30px', height: '20px' }} />
                  </div>
                  <div
                    onClick={() => changeLanguage('en')}
                    className={`cursor-pointer ${i18n.language !== 'en' ? 'opacity-50' : 'opacity-100'}`}
                  >
                      <Flag code="GB" style={{ width: '30px', height: '20px' }} />
                  </div>
              </div>
          </div>
      </motion.header>
    );
}
