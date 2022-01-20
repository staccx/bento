import { useEffect, useState } from "react"
import copy from "copy-to-clipboard"

/**
  Hook for copying to clipboard. Send in the value you wish to copy.
 */
export const useCopyToClipboard = value => {
  const [values, setValues] = useState<any[]>([])
  useEffect(() => {
    if (value) {
      copy(value)
      setValues([...values, value])
    }
  }, [value])

  return values
}
