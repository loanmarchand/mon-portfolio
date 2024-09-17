import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export default function Header() {
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
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/Projects" className="text-gray-300 hover:text-white">Projets</Link>
                    <Link to="/About" className="text-gray-300 hover:text-white">A propos</Link>
                    <Link to="/Contact" className="text-gray-300 hover:text-white">Contact</Link>
                </nav>
            </div>
        </motion.header>
    );
}