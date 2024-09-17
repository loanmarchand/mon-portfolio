import { motion } from "framer-motion";

export default function HomeContainer()
{
    return (
        <section id="home" className="bg-gray-100 py-20">
            <motion.div
                className="container mx-auto text-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
                <p className="text-lg mb-8">Découvrez mes projets, compétences et expériences.</p>
                <motion.a
                    href="/projects"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    Mes projets
                </motion.a>
            </motion.div>
        </section>
    );
}