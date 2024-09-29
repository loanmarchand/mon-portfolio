import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Projects from './pages/ProjectsPage';
import Header from './containers/Header';
import Footer from './containers/Footer.tsx';
import { Analytics } from '@vercel/analytics/react';
import './i18n.js';
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header /> {/* Header fixe en haut de la page */}
        <main className="flex-grow pt-16"> {/* Ajoute un padding-top pour compenser la hauteur du header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer /> {/* Le footer sera toujours en bas */}
        <Analytics />
      </BrowserRouter>
      <SpeedInsights />
    </div>
  );
}

export default App;

