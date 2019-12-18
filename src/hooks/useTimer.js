import { useEffect, useState } from "react"

const useTimer = (time = 1000) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true)
    }, time)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return isReady
}

export default useTimer
