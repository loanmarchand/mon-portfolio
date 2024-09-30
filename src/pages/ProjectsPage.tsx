import GithubProjects from '../components/GithubProjects';
import { useTranslation } from 'react-i18next';
import TitlePage from '../components/TitlePage.tsx';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-6">
          <TitlePage title={t('projects')} />
          <p className="text-center text-lg mb-10 text-gray-200">
            {t('projects_description')}
          </p>
          <GithubProjects />
        </div>
      </div>
    </>
  );
}
