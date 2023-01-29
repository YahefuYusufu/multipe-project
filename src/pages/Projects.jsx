import React from "react"
import { projects } from "../data/index"
import Cart from "../components/Cart"

const styles = {
  container: "w-4/5 h-full mx-auto rounded-lg  mt-32",
  h1: "text-3xl font-bold text-center mb-24",
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
}

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => {
          return <Cart key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
