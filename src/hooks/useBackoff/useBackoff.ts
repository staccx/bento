/* eslint-disable */
import { useEffect, useRef, useState } from "react"

export enum BackoffStrategy {
  Exponential,
  Linear,
  Fixed
}

type BackoffOptions = {
  time: number;
  depth: number;
  maxTime: number;
  strategy: BackoffStrategy;
}

export enum BackoffState {
  Idle = "Idle",
  Retrying = "Retrying",
  BackingOff = "BackingOff",
  Success = "Success",
  Error = "Error"
}

/**
 * Hook to retry a function with different backoff strategies.
 * @param callback Function to retry.
 * @param time Base time
 * @param depth Maximum number of retries
 * @param maxTime Maximum time per retry
 * @param strategy Backoff strategy
 */
export const useBackoff = (
  callback: () => any,
  { time, depth, maxTime, strategy }: BackoffOptions = {
    time: 1000,
    depth: 5,
    maxTime: 5000,
    strategy: BackoffStrategy.Exponential
  }
) => {
  const savedCallback = useRef(callback)
  const retries = useRef<number>(0)
  const nextTime = useRef<number>(0)
  const [result, resultSet] = useState<any>(null)
  const [error, errorSet] = useState<boolean>(false)
  const [state, stateSet] = useState<BackoffState>(BackoffState.Idle)
  const [nextRetry, nextRetrySet] = useState<number>(Date.now())

  const handleRetry = async () => {
    try {
      stateSet(BackoffState.Retrying)
      const r = await savedCallback.current()
      resultSet(r)
      stateSet(BackoffState.Success)
    } catch (e) {
      retries.current++
      stateSet(BackoffState.BackingOff)
      let next = 0
      switch (strategy) {
        case BackoffStrategy.Exponential:
          next = Math.min(Math.exp(retries.current) * time, maxTime)
          break
        case BackoffStrategy.Linear:
          next = Math.min(time * retries.current, maxTime)
          break
        case BackoffStrategy.Fixed:
          next = Math.min(time, maxTime)
          break
      }
      nextTime.current = next
      nextRetrySet(next + Date.now())
    }
  }

  // Set up the timeout.
  useEffect(() => {
    if (retries.current >= depth) {
      errorSet(true)
      stateSet(BackoffState.Error)
      return
    }
    const id = setTimeout(() => handleRetry(), nextTime.current)
    return () => clearTimeout(id)
  }, [retries.current])

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  const reset = () => {
    nextTime.current = time
    // handle immediate retries
    if(retries.current === 0) {
      retries.current = -1
      setTimeout(() => {
        retries.current = 0
      }, 10)
    } else {
      retries.current = 0
    }
    errorSet(false)
    resultSet(null)
    stateSet(BackoffState.Idle)
  }

  return {
    result,
    error,
    state,
    reset,
    nextRetry,
    retries: retries.current
  }
}

useBackoff.BackoffStrategies = BackoffStrategy
useBackoff.BackoffState = BackoffState
