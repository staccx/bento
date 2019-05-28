import { useEffect, useMemo, useState } from "react"
import Fuse from "fuse.js"

const defaultFuseProps = {
  shouldSort: true,
  threshold: 0.3,
  matchAllTokens: true,
  tokenize: true,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2
}
const useSearch = ({ input, documents, keys, fuseProps = {} }) => {
  const [result, setResult] = useState(documents)

  const fuse = useMemo(() => {
    const fProps = Object.assign({}, defaultFuseProps, fuseProps)
    return new Fuse(documents, {
      ...fProps,
      keys
    })
  }, [documents, keys, fuseProps])

  const search = i => {
    const searchResult = i ? fuse.search(i) : documents
    setResult(searchResult)
  }

  useEffect(() => {
    search(input)
  }, [input, fuse])

  return [result, search]
}

export default useSearch
