import React from "react"

const styles = {
  button:
    "px-4 py-2 m-2 text-lg  text-yellow-300 bg-blue-500 rounded-lg hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out",
}

const Category = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={styles.button}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Category
