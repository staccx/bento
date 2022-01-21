import axios from "axios"
import useDebounce from "../useDebounce"
import { useQuery } from "react-query"

const brregInstance = axios.create({
  baseURL: "https://data.brreg.no/enhetsregisteret/api"
})
/**
 * Search in The Brønnøysund Register Centre(Brønnøysundregisteret).
 * Input a search term and it returns an object with the search results.
 */
const useBrRegSearch = searchTerm => {
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)

  const {
    data,
    error: errors,
    isLoading
  } = useQuery(
    debouncedSearchTerm,
    () =>
      brregInstance
        .get("/enheter", {
          params: {
            ...(Number.isInteger(parseInt(searchTerm))
              ? { organisasjonsnummer: debouncedSearchTerm }
              : { navn: debouncedSearchTerm })
          }
        })
        .then(res => res.data),
    {
      enabled: debouncedSearchTerm?.length > 2
    }
  )
  return {
    isLoading,
    results: data
      ? data?._embedded?.enheter?.length > 0
        ? data?._embedded?.enheter
        : []
      : [],
    errors: errors ?? []
  }
}

export default useBrRegSearch
