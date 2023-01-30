import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, Projects } from "./pages"
import { MenuApp, PaginationApp, HackerApp } from "./projects/index"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/menuapp" element={<MenuApp />} />
        <Route path="/paginationapp" element={<PaginationApp />} />
        <Route path="/hackerapp" element={<HackerApp />} />
      </Routes>
    </>
  )
}

export default App
