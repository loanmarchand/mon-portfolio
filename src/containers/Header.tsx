import { motion } from "framer-motion";

export default function Header()
{
    return (
        <motion.header
            className="bg-gray-800 p-4"
            initial={{y: -250}}
            animate={{y: 0}}
            transition={{type: 'spring', stiffness: 120}}
        >
            <div className="container mx-auto flex justify-between items-center">
                <a href="/">
                    <div className="text-white text-2xl font-bold">
                        Mon Portfolio
                    </div>
                </a>
                <nav className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/projects" className="text-gray-300 hover:text-white">Projets</a>
                    <a href="/about" className="text-gray-300 hover:text-white">A propos</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </nav>
            </div>
        </motion.header>
    );
}