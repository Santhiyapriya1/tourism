import './App.css';
import Sample from './components/Sample';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destination from './pages/Destination';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Sample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
