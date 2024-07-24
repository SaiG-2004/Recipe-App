import  Navbar  from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Pages from "./components/Pages";
import Book from "./components/Book";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {


  return (
    <>
     <Router>
     
     <Navbar />
     <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/pages" element={<Pages/>} />
          <Route path="/book" element={<Book/>} />
          
     </Routes>
     <Footer />
     </Router>
    </>
  )
}

export default App;
