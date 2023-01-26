import React from "react"

const Cart = ({ name, link, desc, image }) => {
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow ">
      <a href={link}>
        <img
          className="w-full h-auto object-fill rounded-t-lg"
          src={image}
          alt={image.name}
        />
      </a>
      <div className="p-5 text-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal   text-gray-400">{desc}</p>
      </div>
    </div>
  )
}

export default Cart
