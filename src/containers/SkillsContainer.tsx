import { motion } from "framer-motion";
import {useState} from "react";
import {Tilt} from "react-tilt";

const skills = [
    { name: 'Java', level: 'Advanced', percentage: 80 },
    { name: 'C#', level: 'Advanced', percentage: 80 },
    { name: 'HTML,CSS,PHP', level: 'Advanced', percentage: 75 },
    { name: 'JavaScript', level: 'Intermediate', percentage: 70 },
    { name: 'React', level: 'Intermediate', percentage: 70 },
    { name: 'Python', level: 'Intermediate', percentage: 60 },
    // Ajoute d'autres compétences ici
];

export default function SkillsContainer()
{
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    return (
        <section className="bg-gray-100 py-20">
            <motion.div
                className="container mx-auto text-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h2 className="text-3xl font-bold mb-8">Mes Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {skills.map((skill, index) => (
                        <Tilt className="Tilt" options={{max: 25, scale: 1.05}} key={index}>
                            <motion.div
                                className="relative bg-white shadow-md rounded p-4 m-2 w-64 overflow-hidden"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <p className="text-gray-600 mb-4">{skill.level}</p>
                                <div className="w-full bg-gray-300 rounded h-4">
                                    <motion.div
                                        className="bg-blue-500 h-4 rounded"
                                        initial={{width: 0}}
                                        animate={{width: `${skill.percentage}%`}}
                                        transition={{duration: 1}}
                                    />
                                </div>
                                {hoveredSkill === index && (
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-75 flex items-center justify-center text-white text-lg"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.3}}
                                    >
                                        {`${skill.percentage}%`}
                                    </motion.div>
                                )}
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </motion.div>
        </section>

    );
}