import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

import Home from "./pages/Home";
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* Bỏ cái Route này vì trùng với trên
        <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
      <FloatingContact />
    </Router>
  );
}

export default App;
