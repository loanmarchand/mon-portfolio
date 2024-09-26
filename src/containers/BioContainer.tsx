import { motion } from 'framer-motion';
import ProfilePicture from '../components/ProfilePicture.tsx';
import { useTranslation } from 'react-i18next';

export default function BioContainer() {
    const { t } = useTranslation();
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <ProfilePicture linkProfile={"/profil.jpg"} altPicture={"Loan Marchand"}/>
                <motion.div
                    className="md:w-2/3 text-center md:text-left"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1}}
                >
                    <h2 className="text-3xl font-bold mb-4">{t('hello')}</h2>
                    <p className="text-lg">{t('presentation')}</p>
                </motion.div>
            </div>
        </section>
    )
}