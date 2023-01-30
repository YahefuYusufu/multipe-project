import React from "react"

import { items } from "../../data/index"

import Category from "./Category"
import Menu from "./Menu"

const styles = {
  main: "w-3/4 h-auto mx-auto text-center my-20 bg-slate-200 rounded-lg",
  h2: "text-5xl text-indigo-600",
  underline: "w-[5rem] h-0.5 bg-blue-500 mx-auto",
}

const allCategories = ["all", ...new Set(items.map((item) => item.category))]

const MenuApp = () => {
  const [categories, setCategories] = React.useState(allCategories)
  const [menuItems, setMenuItems] = React.useState(items)

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items)
      return
    }

    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main className={styles.main}>
      <div className="p-4">
        <h2 className={styles.h2}>Our Menu</h2>
        <div className={styles.underline}></div>
      </div>
      <Category categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  )
}

export default MenuApp
