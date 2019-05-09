import PropTypes from "prop-types"
import { useEffect, useMemo } from "react"
import useSanity from "./useSanity"

const SanityQuery = ({ children, query, id }) => {
  const { query: querySanity, queries } = useSanity()

  const result = queries[id]

  useEffect(() => {
    querySanity(query, id)
  }, [query, id])

  return useMemo(() => {
    if (!result) {
      return null
    }

    return children(result)
  }, [result])
}

SanityQuery.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired
}

export default SanityQuery
