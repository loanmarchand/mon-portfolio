import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
        <>
            <div className="container mx-auto  flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">404 Not Found</h1>
              <p>{t('404')}</p>
            </div>
        </>
    );
}