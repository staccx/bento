import React, { useContext } from "react"
import { Context } from "../components/SanityProvider"

export const useSanityQuery = (query, params, defaultValue = null) => {
  const { client } = useContext(Context)
  const [data, setData] = React.useState(defaultValue)
  const [error, setError] = React.useState(null)

  // 🤷‍
  const paramsMemoized = React.useMemo(() => params, [params])

  React.useEffect(() => {
    client
      .fetch(query, paramsMemoized)
      .then(setData)
      .catch(setError)
  }, [query, paramsMemoized, client])

  return { data, error }
}
