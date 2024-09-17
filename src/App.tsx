import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Projects from "./pages/ProjectsPage";
import Header from './containers/Header';
import Footer from "./containers/Footer.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header /> {/* Le header est en dehors des routes pour qu'il soit visible sur toutes les pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
