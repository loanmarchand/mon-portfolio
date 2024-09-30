import { useTranslation } from 'react-i18next';

export default function DownloadCvButton() {
  const { t } = useTranslation();
  //Bouton floatant pour télécharger le CV
  return (
    <a
      href="/CvLoanMarchand.pdf"
      download
      className="fixed bottom-4 right-4 bg-yellow-400 text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center"
    >
      <svg
        className="w-8 h-8 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      {t('download_cv')}
    </a>
  );
}