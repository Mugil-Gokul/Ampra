import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Gallery from './pages/Gallery/Gallery'
import Home from './pages/Home/Home'
import Testimonials from './pages/Testimonials/Testimonials'

function App() {

  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <Gallery/> */}
    {/* <Testimonials/> */}
    {/* <ContactUs/> */}
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default App
