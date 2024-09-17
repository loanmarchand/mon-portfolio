import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/HomePage.tsx";
import About from "./pages/AboutPage.tsx";
import Contact from "./pages/ContactPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Projects from "./pages/ProjectsPage.tsx";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"About"} element={<About />} />
        <Route path={"contact"} element={<Contact />} />
        <Route path={"projects"} element={<Projects />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
