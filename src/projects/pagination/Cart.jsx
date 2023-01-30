import React from "react"

const styles = {
  article:
    "mb-2 bg-white space-y-2 shadow-md py-8 px-14 text-center rounded-xl",
  img: "w-32 h-32 object-cover rounded-full mx-auto",
  h4: "text-lg font-semibold text-gray-800 capitalize",
  a: "p-1 bg-blue-500 rounded-md capitalize text-white",
}

const Cart = ({ avatar_url, html_url, login }) => {
  return (
    <article className={styles.article}>
      <img src={avatar_url} className={styles.img} alt="avatar-url" />
      <h4 className={styles.h4}>{login}</h4>
      <a href={html_url} className={styles.a} target="_blank">
        View Profile
      </a>
    </article>
  )
}

export default Cart
