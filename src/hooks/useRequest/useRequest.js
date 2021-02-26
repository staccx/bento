import useSWR from "swr"
import axios from "axios"
import { useMemo } from "react"

/**
 * Used for making http request
 * @deprecated use react-query instead
 * @param request
 * @param initialData
 * @param config
 * @returns {{data, revalidate: () => Promise<boolean>, response: AxiosResponse<any> | undefined, error: any, isValidating: boolean}}
 */
export const useRequest = (request, { initialData, ...config } = {}) => {
  const { data: response, error, isValidating, revalidate } = useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: "InitialData",
        headers: {},
        data: initialData
      }
    }
  )

  return useMemo(
    () => ({
      data: response && response.data,
      response,
      error,
      isValidating,
      revalidate
    }),
    [response]
  )
}
