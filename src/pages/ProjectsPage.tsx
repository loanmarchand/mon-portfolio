import GithubProjects from '../components/GithubProjects.tsx';
import { useTranslation } from 'react-i18next';

export default function Projects()
{
  const { t } = useTranslation();

    return (
        <>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                  <h1 className="text-4xl font-bold text-center mb-12">{t('projects')}</h1>
                    <p className="text-center text-lg mb-10 text-gray-700">
                      {t('projects_description')}
                    </p>
                    <GithubProjects/>
                </div>
            </div>
        </>
    );
}
