import React from "react"
import { useFetch } from "./useFetch"
import Cart from "./Cart"

const styles = {
  main: "w-3/4 h-auto mx-auto text-center my-20  rounded-lg",
  h2: "text-5xl",
  underline: "w-[5rem] h-1 bg-blue-500 mx-auto my-5 ",
  section: "w-11/12 h-full mx-auto",
  sectionDiv:
    "grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4",
  btnDiv: "flex justify-center flex-wrap my-8",
  middleBTN:
    "tracking-wider m-4 bg-blue-500 hover:bg-blue-700 text-white px-2 rounded",
  btn: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded",
}

const PaginationApp = () => {
  const { loading, data } = useFetch()
  const [page, setPage] = React.useState(0)
  const [followers, setFollowers] = React.useState([])

  React.useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  return (
    <main>
      <div className={styles.main}>
        <h2 className={styles.h2}>{loading ? "Loading..." : "Pagination"}</h2>
        <div className={styles.underline}></div>
      </div>
      <section className={styles.section}>
        <div className={styles.sectionDiv}>
          {followers.map((follower) => {
            return <Cart key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className={styles.btnDiv}>
            <button className={styles.btn} onClick={prevPage}>
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={styles.middleBTN}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className={styles.btn} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default PaginationApp
