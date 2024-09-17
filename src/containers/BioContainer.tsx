import {motion} from "framer-motion";
import ProfilePicture from "../components/ProfilePicture.tsx";

export default function BioContainer() {
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
                    <h2 className="text-3xl font-bold mb-4">Bonjour, je m'appelle Loan Marchand</h2>
                    <p className="text-lg">Je suis un développeur passionné avec une bonne base en Java et C#. J'adore
                        créer des solutions innovantes et travailler sur des projets stimulants.</p>
                </motion.div>
            </div>
        </section>
    )
}