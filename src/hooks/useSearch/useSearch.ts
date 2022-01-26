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

type SearchOptions<T> = {
  input: string | null | undefined
  documents?: T[]
  keys?: string[]
  fuseProps?: any
}
function useSearch<T>({
  input,
  documents = [],
  keys,
  fuseProps = {}
}: SearchOptions<T>): [Fuse.FuseResult<T>[], (input: string) => void] {
  const [result, setResult] = useState<Fuse.FuseResult<T>[]>([])

  const fuse = useMemo(() => {
    const fProps: Fuse.IFuseOptions<T> = Object.assign(
      {},
      defaultFuseProps,
      fuseProps
    )
    return new Fuse(documents, {
      ...fProps,
      keys
    })
  }, [documents, keys, fuseProps])

  const search = useCallback(
    (input: string) => {
      const searchResult = fuse.search(input)
      setResult(searchResult)
    },
    [fuse]
  )

  useEffect(() => {
    if (input) search(input)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  return [result, search]
}

export default useSearch
