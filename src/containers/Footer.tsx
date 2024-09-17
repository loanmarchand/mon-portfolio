import { motion } from "framer-motion";

export default function Footer()
{
    return (
        <motion.footer
            className="footer bg-gray-800 text-white py-4"
            initial={{y: 250}}
            animate={{y: 0}}
            transition={{type: 'spring', stiffness: 120}}
        >
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Loan Marchand. All Rights Reserved.</p>
            </div>
        </motion.footer>
    );
}