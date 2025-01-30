import { BrowserRouter, Route, Routes } from "react-router";
import "./i18n";
import { ThemeProvider } from "./providers/ThemeProvider";

import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from './pages/Home/Home';
import Projects from "./pages/Projects/Projects";

import './App.css';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <div className="page-container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
        <footer>
          <span>&copy; 2025 Joan Ignacio Gonzalez Portfolio</span>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
