import React from "react"
import paginate from "./utils"
const url = "https://api.github.com/users/YusufYakup/followers?per_page=100"

export const useFetch = () => {
  const [loading, isLoading] = React.useState(true)
  const [data, setData] = React.useState([])

  const getFollowers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data))
    isLoading(false)
  }

  React.useEffect(() => {
    getFollowers()
  }, [])

  return { loading, data }
}
