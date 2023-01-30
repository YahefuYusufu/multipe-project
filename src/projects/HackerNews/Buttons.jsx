import React from "react"
import { useGlobalContext } from "./context"

const styles = {
  div: "flex justify-center items-center",
  button:
    "bg-yellow-400 text-slate-700 px-4 py-2 rounded-md mr-4 hover:bg-yellow-500 hover:text-white duration-500 ease-in-out",
  p: "text-xl mr-2",
}

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()
  return (
    <div className={styles.div}>
      <button
        className={styles.button}
        disabled={isLoading}
        onClick={() => handlePage("dec")}
      >
        Prev
      </button>
      <p className={styles.p}>
        {page + 1} Of {nbPages}
      </p>
      <button
        className={styles.button}
        disabled={isLoading}
        onClick={() => handlePage("inc")}
      >
        Next
      </button>
    </div>
  )
}

export default Buttons
