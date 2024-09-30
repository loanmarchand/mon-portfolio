import { motion } from 'framer-motion';

export default function Footer() {
    return (
      <motion.footer
        className="bg-gray-800 text-white py-3 mt-auto border-t border-yellow-400 shadow-inner"
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
          <div className="container mx-auto text-center">
              <p className="text-lg font-semibold tracking-wide">
                  &copy; 2024 Loan Marchand. All Rights Reserved.
              </p>
              <p className="text-sm mt-1 text-gray-400">
                  Designed with ❤️ and React
              </p>
          </div>
      </motion.footer>
    );
}
