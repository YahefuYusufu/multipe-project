import React from "react"
import { useGlobalContext } from "./context"

const styles = {
  loading:
    "w-24 h-24 mt-20 border-4 border-blue-700 text-center rounded-full animate-spin items-center justify-center mx-auto",
  section:
    "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 rounded-xl bg-slate-900 mt-8 border-2",
  article: "bg-white rounded-md p-6 text-center",
  h4: "text-xl text-stone-800 mb-1 font-bold",
  p: "mb-2 text-gray-600",
  div: "flex justify-evenly",
  a: "bg-blue-400 text-slate-700 px-4 py-2 rounded-md mr-4 hover:bg-blue-600 hover:text-white duration-500 ease-in-out",
  button:
    "bg-red-400 text-slate-700 px-4 py-2 rounded-md mr-4 hover:bg-red-600 hover:text-white duration-500 ease-in-out",
}

const HackerNewsList = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>
  }
  return (
    <section className={styles.section}>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className={styles.article}>
            <h4 className={styles.h4}>{title}</h4>
            <p className={styles.p}>
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>
            <div className={styles.div}>
              <a href={url} className={styles.a} target="_blank">
                read more
              </a>
              <button
                className={styles.button}
                onClick={() => removeStory(objectID)}
              >
                Remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default HackerNewsList
