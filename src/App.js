
import './App.css';
import  Sample from'./components/Sample';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destination from './pages/Destination';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const NotFound = () => <h1>404 - Page Not Found</h1>;


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Sample />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/destination" element={<Destination />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;