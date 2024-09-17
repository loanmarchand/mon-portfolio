import Header from "../containers/Header.tsx";
import Footer from "../containers/Footer.tsx";
import BioContainer from "../containers/BioContainer.tsx";
import HomeContainer from "../containers/HomeContainer.tsx";
import SkillsContainer from "../containers/SkillsContainer.tsx";

export default function Home()
{
    return (
        <>
            <Header />
            <HomeContainer />
            <BioContainer />
            <SkillsContainer />
            <Footer />
        </>
    );
}