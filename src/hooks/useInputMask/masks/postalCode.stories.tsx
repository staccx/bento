import React from "react"
import { useInputMask } from "../useInputMask"

export default {
  title: "hooks/useInputMask/Postal Code"
}

export const Vanilla = args => {
  const inputProps = useInputMask({
    mode: "postalcode",
    ...args
  })
  return <input {...inputProps} />
}
Vanilla.args = {}

export const Locale = args => {
  const inputProps = useInputMask({
    mode: "postalcode",
    ...args
  })
  return <input {...inputProps} />
}
Locale.args = {
  options: {
    blocks: [4],
    maxLength: 4,
    pattern: /[^0-9]+/gi
  }
}
