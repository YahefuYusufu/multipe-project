import React from "react"
import { db } from "./firebase"
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore"

import { AiOutlinePlus } from "react-icons/ai"
import { Todo } from "./Todo"

const style = {
  bg: `h-screen w-screen  p-4 bg-gradient-to-r from-[#2f80ED]  to-[#56CCF2]`,
  container: `max-w-[500px] w-full  m-auto mt-32 bg-white rounded-lg shadow-lg p-4 space-y-4`,
  header: `text-3xl font-bold text-center text-gray-700 mt-4`,
  form: `flex justify-between mt-4`,
  input: `w-full p-2  rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-[#2f80ED]`,
  button: `border p-4 ml-2 bg-[#2f80ED] text-white   rounded-r-lg hover:bg-[#56CCF2]`,
  count: `text-gray-500 p-2 text-center`,
}

const TodoApp = () => {
  const [todos, setTodos] = React.useState([])
  const [inputs, setInputs] = React.useState("")

  // create todo
  const addTodo = async (e) => {
    e.preventDefault()
    if (inputs === "") {
      alert("Please enter a todo")
      return
    }
    await addDoc(collection(db, "todos"), {
      text: inputs,
      complete: false,
    })
    setInputs("")
  }
  //Read todo from firebase
  React.useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArray = []
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArray)
    })
    return () => unsubscribe()
  }, [])

  //Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    })
  }
  //Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  }
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.header}>Full Stack Todo App(FireBase)</h3>
        <form onSubmit={addTodo} className={style.form}>
          <input
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
            type="text"
            placeholder="Add Todo"
            className={style.input}
          />
          <button className={style.button}>
            <AiOutlinePlus size={20} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>
            You have <strong>{todos.length}</strong> todos
          </p>
        )}
      </div>
    </div>
  )
}

export default TodoApp
