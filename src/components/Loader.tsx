import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="loader">
        <div className="inner-circle"></div>
      </div>
      <style>{`
        .loader {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(#3498db, transparent);
          animation: rotateLoader 2.5s linear infinite;
        }

        .inner-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes rotateLoader {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% {
            transform: scale(1) translate(-50%, -50%);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.2) translate(-50%, -50%);
            box-shadow: 0 0 30px rgba(255, 255, 255, 1);
          }
          100% {
            transform: scale(1) translate(-50%, -50%);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </motion.div>
  );
}
