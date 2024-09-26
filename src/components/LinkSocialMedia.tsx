import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

export default function LinkSocialMedia({ link, color, icon: Icon }: { link: string, color: string, icon: IconType }) {
  return <motion.a
    href={link}
    className={color}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
  >
    <Icon size={40} />
  </motion.a>;
}