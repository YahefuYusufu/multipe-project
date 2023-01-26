import React from "react"
import { projects } from "../data/index"
import Cart from "../components/Cart"

const Projects = () => {
  return (
    <div className="w-4/5 h-full mx-auto  rounded-lg  mt-32">
      <h1 className="text-3xl font-bold text-center mb-24">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {projects.map((project) => {
          return <Cart key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
