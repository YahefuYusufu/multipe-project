import React from "react"

const styles = {
  container: "max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow",
  img: "w-full h-[180px] object-fill rounded-t-lg",
  content: "p-5 text-center",
  h5: "mb-2 text-2xl font-bold tracking-tight  text-white",
  p: "mb-3 font-normal   text-gray-400",
}

const Cart = ({ name, link, desc, image }) => {
  return (
    <div className={styles.container}>
      <a href={link}>
        <img className={styles.img} src={image} alt={image.name} />
      </a>
      <div className={styles.content}>
        <a href={link}>
          <h5 className={styles.h5}>{name}</h5>
        </a>
        <p className={styles.p}>{desc}</p>
      </div>
    </div>
  )
}

export default Cart
