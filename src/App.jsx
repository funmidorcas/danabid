import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Estates from "./pages/Estates";
import EstateDetail from "./pages/EstateDetail";
import Promo from "./pages/Promo";
import Farmland from "./pages/Farmland";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estates" element={<Estates />} />
        <Route path="/estates/:slug" element={<EstateDetail />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/farmland" element={<Farmland />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
