import { motion } from 'framer-motion';
import { FaFacebook, FaFacebookMessenger, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LinkSocialMedia from '../components/LinkSocialMedia.tsx';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const [statusMessage, setStatusMessage] = useState("");

    const form = useRef<HTMLFormElement | null>(null);
    const { t } = useTranslation();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID!;

    const handleMessengerClick = () => {
        window.open('https://m.me/loan.marchand2', '_blank');
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        if (!form.current.checkValidity()) {
            setStatusMessage(t('contact_form_validation'));
            return;
        }

        emailjs
          .sendForm(
            serviceID,
            templateID,
            form.current,
            userID,
          )
          .then(
            () => {
                setStatusMessage(t('contact_form_success'));
            },
            (error) => {
                setStatusMessage(t('contact_form_error'));
                console.error(error.text);
            },
          );
    };

    return (
      <>
          <section id="contact"
                   className="bg-gradient-to-r from-black via-black to-pink-600 min-h-screen flex flex-col justify-between pt-20">
              <div className="container mx-auto text-center flex-grow">
                  {/* Titre de la section avec animation */}
                  <motion.h2
                    className="text-4xl font-extrabold text-white mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                      {t('contact_title')}
                  </motion.h2>

                  {/* Liens vers réseaux sociaux */}
                  <div className="flex justify-center space-x-8 mb-12">
                      <LinkSocialMedia color={'text-white hover:text-yellow-300'} icon={FaFacebook}
                                       link={'https://facebook.com/loan.marchand2'} />
                      <LinkSocialMedia color={'text-white hover:text-yellow-300'} icon={FaXTwitter}
                                       link={'https://x.com/loanmarchand27'} />
                      <LinkSocialMedia color={'text-white hover:text-yellow-300'} icon={FaLinkedin}
                                       link={'https://linkedin.com/in/loan-marchand'} />
                      <LinkSocialMedia color={'text-white hover:text-yellow-300'} icon={FaGithub}
                                       link={'https://github.com/loanmarchand'} />
                      <LinkSocialMedia color={'text-white hover:text-yellow-300'} icon={IoMail}
                                       link={'mailto:loanmarchand7@gmail.com'} />
                  </div>

                  {/* Formulaire de contact */}
                  <motion.div
                    className="bg-white shadow-xl rounded-lg p-8 mb-8 w-full max-w-lg mx-auto"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                      <form ref={form} onSubmit={sendEmail}>
                          <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                  {t('contact_form_name')}
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="user_name"
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                              />
                          </div>
                          <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                  Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="user_email"
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                              />
                          </div>
                          <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                  Message
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                              ></textarea>
                          </div>
                          <div className="flex justify-center">
                              <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out"
                              >
                                  {t('contact_form_submit')}
                              </button>
                          </div>
                      </form>
                      {statusMessage && (
                        <p className="mt-6 text-sm text-green-500">
                            {statusMessage}
                        </p>
                      )}
                  </motion.div>

                  {/* Bouton Messenger animé */}
                  <motion.button
                    className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                    onClick={handleMessengerClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                      <FaFacebookMessenger size={24} />
                      <span>{t('contact_title')}</span>
                  </motion.button>
              </div>
          </section>
      </>
    );
}
