import { useCallback, useEffect, useMemo, useState } from "react"
import Fuse from "fuse.js"

/**
 * useSearch lets you search Json files/APIs
 */
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

type SearchOptions = {
  input: string | null | undefined
  documents?: any[]
  keys?: string[]
  fuseProps?: any
}
const useSearch = ({
  input,
  documents = [],
  keys = [],
  fuseProps = {}
}: SearchOptions) => {
  const [result, setResult] = useState(documents)

  const fuse = useMemo(() => {
    const fProps = Object.assign({}, defaultFuseProps, fuseProps)
    return new Fuse(documents, {
      ...fProps,
      keys
    })
  }, [documents, keys, fuseProps])

  const search = useCallback(
    (i: string) => {
      const searchResult = i ? fuse.search(i) : documents
      setResult(searchResult)
    },
    [documents, fuse]
  )

  useEffect(() => {
    if (input) search(input)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  return [result, search]
}

export default useSearch
