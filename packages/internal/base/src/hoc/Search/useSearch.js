import { useEffect, useState } from "react"
const JsSearch = require("js-search")

const useSearch = ({
  uniqueProp,
  indices,
  documents,
  searchSubstring = false
}) => {
  const [result, setResult] = useState([])
  const [searcher, setSearcher] = useState(null)

  let searchInstance = new JsSearch.Search(uniqueProp)
  if (searchSubstring) {
    searchInstance.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
  }

  const search = term => {
    if (!searcher) {
      return null
    }
    const res = searcher.search(term)
    setResult(res)
  }

  useEffect(() => {
    indices.forEach(index => {
      searchInstance.addIndex(index)
    })

    if (documents && documents.length) {
      searchInstance.addDocuments(documents)
    } else {
      console.warn(
        "[SEARCH]: No documents provided. This will cause search to fail"
      )
    }
    setSearcher(searchInstance)

    return () => {
      return null
    }
  }, [])

  return [result, search]
}

export default useSearch
