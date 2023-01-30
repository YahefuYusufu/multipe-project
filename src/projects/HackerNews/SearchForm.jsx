import React from "react"
import { useGlobalContext } from "./context"

const styles = {
  form: "w-[1170px] max-w-lg mx-auto mt-20 mb-12",
  h2: "text-5xl text-slate-700 tracking-wide",
  input:
    "block w-full rounded-md border-yellow-400 pl-2 pr-12 my-6 focus:border-indigo-500 focus:ring-indigo-500  border-2 sm:text-xl lg:text-2xl",
}

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.h2}>Search Hacker News</h2>
      <input
        type="text"
        placeholder="Search..."
        className={styles.input}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
