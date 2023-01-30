import React from "react"

const style = {
  container:
    "w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
  article: "flex flex-col items-center",
  img: "w-full h-[200px] object-cover rounded-lg border border-gray-200 shadow-lg block",
  title: "text-2xl text-indigo-600 mb-0 pt-2",
  desc: "text-lg text-gray-500",
}
const Menu = ({ items }) => {
  return (
    <div className={style.container}>
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem
        return (
          <article key={id} className={style.article}>
            <img src={img} alt={title} className={style.img} />
            <div className={style.article}>
              <h3 className={style.title}>{title}</h3>
              <p className={style.desc}>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
