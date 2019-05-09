import { useContext, useMemo } from "react"
import { Context } from "./SanityProvider"

// TODO: Take props and pass for better querying
const useSanity = () => {
  const { documents, types, queries, ...rest } = useContext(Context)

  return useMemo(
    () => ({
      documents,
      types,
      queries,
      ...rest
    }),
    [documents, types, queries]
  )
}

export default useSanity
