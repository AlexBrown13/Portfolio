import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
