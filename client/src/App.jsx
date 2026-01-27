import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import LearnMore from "./pages/LearnMore";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App = ()=>{

const ScrollToTop = ()=> {
  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);
    
  }, [pathname]);

  return null; 
}

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/learnMore" element={<LearnMore/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
