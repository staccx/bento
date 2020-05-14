import React, { useContext } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"
import { Context } from "../components/SanityProvider"

export const useSanityQuery = (query, params, defaultValue = null) => {
  const { client } = useContext(Context)
  const [data, setData] = React.useState(defaultValue)
  const [error, setError] = React.useState(null)

  useDeepCompareEffect(() => {
    client
      .fetch(query, params)
      .then(setData)
      .catch(setError)
  }, [query, params, client])

  return { data, error }
}
