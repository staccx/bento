import { useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import useSanity from "./useSanity"

const SanityDocument = ({ id, children }) => {
  const { getDocument, documents } = useSanity()

  const document = documents[id]

  useEffect(() => {
    getDocument(id)
  }, [id])

  return useMemo(() => {
    console.log("Rerendering sanityDocument", id)

    if (!document) {
      return null
    }

    return children(document)
  }, [document])
}

SanityDocument.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default SanityDocument
