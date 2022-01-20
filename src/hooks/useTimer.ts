import { useEffect, useState } from "react"

const useTimer = (time = 1000) => {
  const [isReady, setIsReady] = useState(time === 0)

  useEffect(() => {
    let timeout = null
    if (!isReady) {
      timeout = setTimeout(() => {
        setIsReady(true)
      }, time)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return isReady
}

export default useTimer
