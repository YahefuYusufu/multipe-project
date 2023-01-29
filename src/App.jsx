import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, Projects } from "./pages"
import { MenuApp, PaginationApp } from "./pages/projects/index"

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
        <Route path="/paginationapp" element={<PaginationApp />} />
      </Routes>
    </>
  )
}

export default App
