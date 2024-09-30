import { motion } from 'framer-motion';
import ProfilePicture from '../components/ProfilePicture.tsx';
import ExperienceComponent from '../components/ExperienceComponent.tsx';
import SkillComponent from '../components/SkillComponent.tsx';
import { useTranslation } from 'react-i18next';
import DownloadCvButton from '../components/DownloadCvButton.tsx';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gradient-to-br from-black via-black to-pink-600 py-20 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          {/* Header avec animation */}
          <motion.h1
            className="text-5xl font-extrabold text-center text-yellow-400 mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t('cv_title')}
          </motion.h1>

          {/* Section Photo et Profil */}
          <motion.div
            className="bg-gray-900 text-white border border-yellow-400 shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {/* Photo */}
            <ProfilePicture linkProfile={'/img.png'} altPicture={t('profile_picture_alt')} />

            {/* Profil */}
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-3xl font-semibold mb-4 text-yellow-400">{t('profile_title')}</h2>
              <p>{t('profile_description')}</p>
            </div>
          </motion.div>

          {/* Section Expériences */}
          <motion.div
            className="bg-gray-900 text-white border border-yellow-400 shadow-lg rounded-lg p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">{t('experience_title')}</h2>
            <ExperienceComponent title={t('experience_1_title')} date={t('experience_1_date')}
                                 description={[t('experience_1_desc1'), t('experience_1_desc2'), t('experience_1_desc3')]} />
            <ExperienceComponent title={t('experience_2_title')} date={t('experience_2_date')}
                                 description={[t('experience_2_desc1'), t('experience_2_desc2'), t('experience_2_desc3')]} />
            <ExperienceComponent title={t('experience_3_title')} date={t('experience_3_date')}
                                 description={[t('experience_3_desc1'), t('experience_3_desc2'), t('experience_3_desc3')]} />
          </motion.div>

          {/* Section Éducation */}
          <motion.div
            className="bg-gray-900 text-white border border-yellow-400 shadow-lg rounded-lg p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">{t('education_title')}</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{t('education_1_title')}</h3>
              <span className="text-gray-400">{t('education_1_date')}</span>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{t('education_2_title')}</h3>
              <span className="text-gray-400">{t('education_2_date')}</span>
            </div>
          </motion.div>

          {/* Section Compétences */}
          <motion.div
            className="bg-gray-900 text-white border border-yellow-400 shadow-lg rounded-lg p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">{t('skills_title')}</h2>
            <div className="grid grid-cols-2 gap-4">
              <SkillComponent title={t('skills_languages')} description="Java, C#, JavaScript, Python, PHP, SQL" />
              <SkillComponent title={t('skills_frameworks')} description="React, Node.js, Laravel" />
              <SkillComponent title={t('skills_tools')} description="Git, Docker" />
              <SkillComponent title={t('skills_soft_skills')}
                              description="Teamwork, Problem Solving, Communication" />
            </div>
          </motion.div>
          <DownloadCvButton />
        </div>
      </div>
    </>
  );
}
