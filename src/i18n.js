import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to my portfolio',
      discover: 'Discover my projects, skills and experiences.',
      projects: 'My projects',
      hello: 'Hello, my name is Loan Marchand',
      presentation: 'I am a passionate developer with a good foundation in Java and C# thanks to my studies and I am specializing in web development. I love creating innovative solutions and working on challenging projects.',
      404: 'Sorry, the page you are looking for does not exist.',
      projects_description: 'Here are some recent projects I have completed. You can click on each of them to see more details on GitHub.',
      contact_form_validation: 'Please fill in all fields of the form.',
      contact_form_success: 'Your message has been sent successfully.',
      contact_form_error: 'An error occurred while sending the message.',
      contact_title: 'Contact me',
      contact_form_name: 'Name',
      contact_form_submit: 'Send',
      About: 'About',
      cv_title: 'Loan Marchand - CV',
      profile_title: 'Profile',
      profile_picture_alt: 'Loan Marchand',
      profile_description: 'Passionate about computer science and currently looking for an internship, I specialize in web development, with expertise in both front-end and back-end. With a solid background in Java and C#, I am ready to apply my technical skills and contribute to innovative and challenging projects.',
      experience_title: 'Experience',
      experience_1_title: 'IT Student - LPM Holding',
      experience_1_date: 'September 2024 - Present',
      experience_1_desc1: 'Database management',
      experience_1_desc2: 'Improvement of internal software using PHP, Laravel',
      experience_1_desc3: 'Management of various software: Mews, Until, Resengo',
      experience_2_title: 'Sports Instructor - Adventure Valley',
      experience_2_date: 'July 2020 - Present',
      experience_2_desc1: 'Welcoming clients and explaining available activities',
      experience_2_desc2: 'Training and supervising teams to ensure the smooth running of activities',
      experience_2_desc3: 'Ensuring participant safety and intervening in case of emergency',
      experience_3_title: 'Waiter - Le Sanglier des Ardennes',
      experience_3_date: 'October 2022 - March 2023',
      experience_3_desc1: 'Welcoming customers and seating them at their tables',
      experience_3_desc2: 'Presenting the menu and advising customers on dishes and drinks',
      experience_3_desc3: 'Taking orders and communicating them accurately to the kitchen',
      education_title: 'Education',
      education_1_title: 'Bachelor\'s Degree in Computer Science, Application Development',
      education_1_date: 'Helmo, Liège - 2020 - Present',
      education_2_title: 'Technical Secondary Diploma in Computer Science',
      education_2_date: 'Institut Saint-Roch, Marche-En-Famenne - 2015 - 2019',
      skills_title: 'Skills',
      skills_languages: 'Languages',
      skills_frameworks: 'Frameworks',
      skills_tools: 'Tools',
      skills_soft_skills: 'Soft Skills',
      back_home: 'Back to home',
      download_cv: 'Download my CV',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur mon portfolio',
      discover: 'Découvrez mes projets, compétences et expériences.',
      projects: 'Mes projets',
      hello: 'Bonjour, je m\'appelle Loan Marchand',
      presentation: 'Je suis un développeur passionné avec une bonne base en Java et C# grace à mes études et je suis entrain de me spécialiser vers le développement web. J\'adore créer des solutions innovantes et travailler sur des projets stimulants.',
      404: 'Désolé, la page que vous cherchez n\'existe pas.',
      projects_description: 'Voici quelques projets récents que j\'ai réalisés. Vous pouvez cliquer sur chacun d\'eux pour voir plus de détails sur GitHub.',
      contact_form_validation: 'Veuillez remplir tous les champs du formulaire.',
      contact_form_success: 'Votre message a bien été envoyé.',
      contact_form_error: 'Une erreur est survenue lors de l\'envoi du message.',
      contact_title: 'Contactez-moi',
      contact_form_name: 'Nom',
      contact_form_submit: 'Envoyer',
      About: 'À propos',
      cv_title: 'Loan Marchand - CV',
      profile_title: 'Profil',
      profile_picture_alt: 'Loan Marchand',
      profile_description: 'Passionné par l\'informatique et actuellement à la recherche d\'un stage, je me spécialise dans le développement web, avec une expertise en front-end et back-end. Fort d\'une solide formation en Java et en C#, je suis prêt à mettre en pratique mes compétences techniques et à contribuer à des projets innovants et stimulants.',
      experience_title: 'Expérience',
      experience_1_title: 'Étudiant IT - LPM Holding',
      experience_1_date: 'Septembre 2024 - En cours',
      experience_1_desc1: 'Gestion de la base de données',
      experience_1_desc2: 'Amélioration du logiciel interne en PHP, Laravel',
      experience_1_desc3: 'Gestion de différents logiciels : Mews, Until, Resengo',
      experience_2_title: 'Moniteur Sportif - Adventure Valley',
      experience_2_date: 'Juillet 2020 - En cours',
      experience_2_desc1: 'Accueillir les clients et expliquer les activités disponibles',
      experience_2_desc2: 'Former et encadrer les équipes pour assurer le bon déroulement des activités',
      experience_2_desc3: 'Assurer la sécurité des participants et intervenir en cas d\'urgence',
      experience_3_title: 'Serveur - Le Sanglier des Ardennes',
      experience_3_date: 'Octobre 2022 - Mars 2023',
      experience_3_desc1: 'Accueillir les clients et les installer à leur table',
      experience_3_desc2: 'Présenter le menu et conseiller sur les plats et boissons',
      experience_3_desc3: 'Prendre les commandes et les transmettre à la cuisine',
      education_title: 'Éducation',
      education_1_title: 'Bachelier en Informatique, Développement d\'Applications',
      education_1_date: 'Helmo, Liège - 2020 - En cours',
      education_2_title: 'CESS Technique de Transition en Informatique',
      education_2_date: 'Institut Saint-Roch, Marche-En-Famenne - 2015 - 2019',
      skills_title: 'Compétences',
      skills_languages: 'Langages',
      skills_frameworks: 'Frameworks',
      skills_tools: 'Outils',
      skills_soft_skills: 'Compétences relationnelles',
      back_home: 'Retour à l\'accueil',
      download_cv: 'Télécharger mon CV',


    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  }).then(_ => console.log('i18n initialized'));

export default i18n;
