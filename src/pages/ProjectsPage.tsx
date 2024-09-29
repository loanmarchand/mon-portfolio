import GithubProjects from '../components/GithubProjects.tsx';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gradient-to-r from-black via-black to-pink-600 py-16 min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
            {t('projects')}
          </h1>
          <p className="text-center text-lg mb-10 text-gray-200">
            {t('projects_description')}
          </p>
          <GithubProjects />
        </div>
      </div>
    </>
  );
}
