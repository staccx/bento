import { useEffect, useState } from "react"
import copy from "copy-to-clipboard"

/**
  Hook for copying to clipboard. Send in the value you wish to copy.
 */
export const useCopyToClipboard = (value: string) => {
  const [values, setValues] = useState<string[]>([])
  useEffect(() => {
    if (value) {
      copy(value)
      setValues([...values, value])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return values
}
