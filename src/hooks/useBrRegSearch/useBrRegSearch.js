import { useEffect, useState } from "react"

const useBrRegSearch = searchTerm => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!searchTerm || searchTerm.length < 2) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    const getCompaniesByName = async searchTerm => {
      const filter = `startswith(navn,'${searchTerm}')`
      const companies = await window
        .fetch(
          `https://data.brreg.no/enhetsregisteret/enhet.json?page=${0}&size=${5}&$filter=${filter}`
        )
        .then(result => result.json())
        .then(json => json.data)

      return companies
    }

    getCompaniesByName(searchTerm).then(companies => console.log(companies))

    getCompaniesByName(searchTerm).then(companies => {
      setResults(companies)
      setIsLoading(false)
    })
  }, [searchTerm])

  return { isLoading, results }
}

export default useBrRegSearch
