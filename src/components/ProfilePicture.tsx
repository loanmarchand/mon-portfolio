import {motion} from "framer-motion";

export default function ProfilePicture({linkProfile, altPicture} : {linkProfile: string, altPicture: string}) {
    return <motion.div
        className="md:w-1/3 mb-8 md:mb-0"
        initial={{x: -200}}
        animate={{x: 0}}
        transition={{type: "spring", stiffness: 50}}
    >
        <img src={linkProfile} alt={altPicture} className="rounded-full w-48 h-48 mx-auto md:mx-0"/>
    </motion.div>;
}