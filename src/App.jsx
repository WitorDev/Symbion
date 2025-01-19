import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  document.body.className = "bg-slate-950"
  return (
    <BrowserRouter>
      <div className="w-full sm:max-w-screen-2xl mx-auto">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
