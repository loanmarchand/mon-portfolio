import {motion} from "framer-motion";
import {FaFacebook, FaFacebookMessenger, FaGithub, FaLinkedin, FaXTwitter} from "react-icons/fa6";

export default function Contact() {
    const handleMessengerClick = () => {
        window.open('https://m.me/loan.marchand2', '_blank');
    };

    return (
        <>
            <section id="contact" className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <motion.h2
                        className="text-3xl font-bold mb-8"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        Contactez-moi
                    </motion.h2>
                    <div className="flex justify-center space-x-4 mb-8">
                        <motion.a
                            href="https://facebook.com/loan.marchand2"
                            className="text-blue-600"
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <FaFacebook size={40}/>
                        </motion.a>
                        <motion.a
                            href="https://x.com/loanmarchand27"
                            className="text-black"
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <FaXTwitter size={40}/>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/loan-marchand-8056811a2/"
                            className="text-blue-700"
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <FaLinkedin size={40}/>
                        </motion.a>
                        <motion.a
                            href="https://github.com/loanmarchand"
                            className="text-black"
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <FaGithub size={40}/>
                        </motion.a>
                    </div>
                    <motion.div
                        className="bg-white shadow-md rounded p-8 mb-8 w-full max-w-lg mx-auto"
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </motion.div>
                    <motion.button
                        className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline float-right"
                        onClick={handleMessengerClick}
                        initial={{scale: 1}}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        <FaFacebookMessenger size={24}/>
                        <span>Chat avec moi</span>
                    </motion.button>
                </div>
            </section>
        </>
    );
}