import React from "react"
import { FaRegTrashAlt } from "react-icons/fa"

const style = {
  li: `flex justify-between items-center  bg-slate-200 p-2 my-2 border-b-2 border-gray-200 rounded-lg`,
  liComplete: `flex justify-between items-center  bg-red-400 my-2  p-2 border-b-2 border-gray-200 rounded-lg`,
  row: `flex items-center `,
  text: `ml-2 cursor-pointer  text-gray-700`,
  textComplete: `ml-2 cursor-pointer text-white line-through`,
  button: `bg-red-500 p-2 rounded-lg text-white hover:bg-red-800`,
  input: `cursor-pointer rounded-l-lg border-2 border-gray-300  focus:outline-none focus:border-[#2f80ED]`,
}

export const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className={style.button}>
        {<FaRegTrashAlt />}
      </button>
    </li>
  )
}
