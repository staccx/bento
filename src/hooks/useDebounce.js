import { useState, useEffect } from "react"

const useDebounce = (input, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [input, delay])

  return [debouncedValue, setDebouncedValue]
}

export default useDebounce
