import { useEffect, useMemo, useState } from "react"

const defaultCallback = (
  mutationList: MutationRecord[],
  observer?: MutationObserver
) => mutationList

export function useMutationObserver(
  targetNode,
  config,
  callback = defaultCallback
) {
  const [value, setValue] = useState<MutationRecord[]>()
  const observer = useMemo(
    () =>
      new MutationObserver((mutationList, observer) => {
        const result = callback(mutationList, observer)
        setValue(result)
      }),
    [callback]
  )
  useEffect(() => {
    if (targetNode) {
      observer.observe(targetNode?.current ?? targetNode, config)
      return () => {
        observer.disconnect()
      }
    }
  }, [targetNode, config])

  return value
}
