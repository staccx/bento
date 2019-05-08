import PropTypes from "prop-types"
import { useMemo, useEffect } from "react"
import useSanity from "./useSanity"

const SanityList = ({ type, children }) => {
  const { getType, types } = useSanity()
  const documents = types[type] || []

  useEffect(() => {
    getType(type)
  }, [type])

  return useMemo(() => {
    return children(documents)
  }, documents.length)
}

export default SanityList

SanityList.propTypes = {
  children: PropTypes.func,
  type: PropTypes.string
}
