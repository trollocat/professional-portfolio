import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./i18n";

import Projects from "./pages/Projects/Projects";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home';

import './App.css'

function App() {

  return (
    <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
          <footer>
            <span>&copy; 2025 Joan Ignacio Gonzalez Portfolio</span>
          </footer>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
