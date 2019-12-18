import { useState, useEffect } from "react"

const useDebounce = (initial, delay) => {
  const [value, setValue] = useState(initial)
  const [debouncedValue, setDebouncedValue] = useState(initial)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return [debouncedValue, setValue]
}

export default useDebounce
