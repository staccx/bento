import { useState, useEffect } from "react"

export function useDebounce<Type>(
  input: Type,
  delay: number
): [Type, React.Dispatch<React.SetStateAction<Type>>] {
  const [debouncedValue, setDebouncedValue] = useState<Type>(input)

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
