import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./ThemeProvider";
import Header from "./components/Header";
import Home from './pages/Home';
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <footer>
          <span>&copy; 2025 Joan Ignacio Gonzalez Portfolio</span>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
