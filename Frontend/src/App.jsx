import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Gallery from "./pages/Gallery/Gallery";
import Testimonials from "./pages/Testimonials/Testimonials";
import ContactUs from "./pages/ContactUs/ContactUs";
import ExamsOffered from "./pages/ExamsOffered/ExamsOffered";

// Exam Pages
import CLEP from "./pages/ExamRegistration/CLEP";
import GRE from "./pages/ExamRegistration/GRE";
// import IELTS from './pages/ExamRegistration/IELTS'
import TOEFL from "./pages/ExamRegistration/TOEFL";
import PSI from "./pages/ExamRegistration/PSI";
import PearsonVue from "./pages/ExamRegistration/PearsonVue";
import Kryterion from "./pages/ExamRegistration/Kryterion";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/exams" element={<ExamsOffered />} />

        {/* Exam Registration Pages */}
        <Route path="/register/clep" element={<CLEP />} />
        <Route path="/register/gre" element={<GRE />} />
        <Route path="/register/toefl" element={<TOEFL />} />
        <Route path="/register/psi" element={<PSI />} />
        <Route path="/register/pearson-vue" element={<PearsonVue />} />
        <Route path="/register/kryterion" element={<Kryterion />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
