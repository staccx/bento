import { useEffect, useState } from "react"
import copy from "copy-to-clipboard"

export const useCopyToClipboard = value => {
  const [values, setValues] = useState([])
  useEffect(() => {
    if (value) {
      copy(value)
      setValues([...values, value])
    }
  }, [value])

  return values
}
