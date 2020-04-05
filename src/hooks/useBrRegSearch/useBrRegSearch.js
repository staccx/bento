import { useEffect, useState } from "react"

const useBrRegSearch = searchTerm => {
  const [results, setResults] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!searchTerm || searchTerm.length < 2) {
      setIsLoading(false)
      setResults([])
      return
    }

    setIsLoading(true)

    const getCompaniesByName = async searchTerm => {
      let companies

      try {
        companies = await window
          .fetch(
            `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${searchTerm}`
          )
          .then(result => result.json())
      } catch (e) {
        setErrors(e.message)
      }
      return companies._embedded.enheter
    }

    getCompaniesByName(searchTerm).then(companies => {
      if (companies) {
        setResults(companies)
      } else {
        setResults([])
      }

      setIsLoading(false)
    })
  }, [searchTerm])

  return { isLoading, results, errors }
}

export default useBrRegSearch
