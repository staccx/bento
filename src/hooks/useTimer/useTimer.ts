import { useEffect, useState } from "react"

export function useTimer(time: number = 1000) {
  const [isReady, setIsReady] = useState(time === 0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (!isReady) {
      timeout = setTimeout(() => {
        setIsReady(true)
      }, time)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isReady, time])

  return isReady
}
