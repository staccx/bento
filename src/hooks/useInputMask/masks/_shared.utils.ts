import { useEffect, useState } from "react"

export const useDelayedValue = (value, delay = 1000) => {
  const [val, valSet] = useState()

  useEffect(() => {
    let timeout
    if (value) {
      timeout = setTimeout(() => {
        valSet(value)
      }, delay)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [delay, value])

  return val
}
