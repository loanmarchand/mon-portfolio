import { motion } from "framer-motion";
import ExperienceComponent from "../components/ExperienceComponent";
import SkillComponent from "../components/SkillComponent.tsx";
import ProfilePicture from "../components/ProfilePicture.tsx";

export default function CvContainer() {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto max-w-4xl">
                {/* Header avec animation */}
                <motion.h1
                    className="text-4xl font-bold text-center mb-10"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    Loan Marchand - CV
                </motion.h1>

                {/* Section Photo et Profil */}
                <motion.div
                    className="bg-white shadow-md rounded p-6 mb-8 flex flex-col md:flex-row items-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.2, duration: 1}}
                >
                    {/* Photo */}
                    <ProfilePicture linkProfile={"/profil.jpg"} altPicture={"Loan Marchand"}/>

                    {/* Profil */}
                    <div className="md:w-2/3 md:pl-6">
                        <h2 className="text-2xl font-semibold mb-4">Profil</h2>
                        <p>
                            Passionné par l'informatique et actuellement à la recherche d'un stage, je me suis entrain de me
                            spécialisé dans le développement web, avec une expertise aussi bien en front-end qu'en
                            back-end. Fort d'une solide formation en Java et en C#, je suis prêt à mettre en pratique
                            mes compétences techniques et à contribuer à des projets innovants et stimulants.
                        </p>
                    </div>
                </motion.div>

                {/* Section Expériences */}
                <motion.div
                    className="bg-white shadow-md rounded p-6 mb-8"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.4, duration: 1}}
                >
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    <ExperienceComponent title="Etudiant IT - LPM Holding" date="Septembre 2024 - En cours"
                                         description={["Gestion de la base de données"]}/>
                    <ExperienceComponent title="Moniteur Sportif - Adventure Valley" date="Juillet 2020 - En cours"
                                         description={["Accueillir les clients et leur expliquer les différentes activités disponibles.", "Former et encadrer les équipes pour assurer le bon déroulement des activités.", "Assurer la sécurité des participants et intervenir en cas d'urgence.", "Promu responsable d'activité et secouriste après plusieurs années, avec la responsabilité de gérer une équipe de 5 à 6 personnes.", "Gérer les problèmes et les situations d'urgence avec efficacité."]}/>
                    <ExperienceComponent title="Serveur - Le Sanglier des Ardennes" date="Octobre 2022 - Mars 2023"
                                         description={["Accueillir les clients et les installer à leur table.", "Présenter le menu et conseiller les clients sur les plats et les boissons.", "Prendre les commandes et les transmettre à la cuisine de manière précise.", "Servir les plats et les boissons aux clients avec professionnalisme et courtoisie.", "Gérer les paiements et les transactions financières."]}/>
                </motion.div>

                {/* Section Éducation */}
                <motion.div
                    className="bg-white shadow-md rounded p-6 mb-8"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.6, duration: 1}}
                >
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Bachelier Informatique orientation Développement
                            d'application</h3>
                        <span className="text-gray-600">Helmo, Liège - 2020 - En cours</span>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">CESS Technique de transition en informatique</h3>
                        <span className="text-gray-600">Helmo, Liège - 2015 - 2019</span>
                    </div>
                </motion.div>

                {/* Section Compétences */}
                <motion.div
                    className="bg-white shadow-md rounded p-6 mb-8"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.8, duration: 1}}
                >
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <SkillComponent title={"Languages"} description={"Java, C#, JavaScript, Python"}/>
                        <SkillComponent title={"Frameworks"} description={"React, Node.js, Laravel"}/>
                        <SkillComponent title={"Tools"} description={"Git, Docker"}/>
                        <SkillComponent title={"Soft Skills"} description={"Teamwork, Problem Solving, Communication"}/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
