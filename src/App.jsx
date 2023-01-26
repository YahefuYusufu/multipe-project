import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, Projects } from "./pages"
import MenuApp from "./pages/projects/menuapp/MenuApp"
import Projects2 from "./pages/projects/Projects2"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* Projects Page */}
      <Routes>
        <Route path="/menuapp" element={<MenuApp />} />
        <Route path="/projects2" element={<Projects2 />} />
      </Routes>
    </>
  )
}

export default App
