import React from "react"

const Menu = ({ items }) => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem
        return (
          <article key={id} className="flex flex-col items-center">
            <img
              src={img}
              alt={title}
              className="w-full h-[200px] object-cover rounded-lg border border-gray-200 shadow-lg block"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-2xl text-indigo-600 mb-0 pt-2">{title}</h3>
              <p className="text-lg text-gray-500">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
