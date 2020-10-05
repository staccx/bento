import { useRequest } from "../useRequest/useRequest"
import useDebounce from "../useDebounce"

/**
 * Search in The Brønnøysund Register Centre(Brønnøysundregisteret).
 * Input a search term and it returns an object with the search results.
 */
const useBrRegSearch = searchTerm => {
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)

  const { data, error: errors } = useRequest(
    debouncedSearchTerm.length >= 2
      ? {
          url: `https://data.brreg.no/enhetsregisteret/api/enheter?${
            Number.isInteger(parseInt(searchTerm))
              ? "organisasjonsnummer"
              : "navn"
          }=${debouncedSearchTerm}`,
          params: {},
          transformRequest: [
            function(data, headers) {
              delete headers.common.Authorization
              return data
            }
          ]
        }
      : null
  )

  return {
    isLoading: !data && !errors,
    results: data
      ? data?._embedded?.enheter?.length > 0
        ? data?._embedded?.enheter
        : []
      : [],
    errors: errors ?? []
  }
}

export default useBrRegSearch
