import React from "react"
import { useInputMask } from "../useInputMask"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "hooks/useInputMask/Phone"
}

export const Vanilla = args => {
  const inputProps = useInputMask({
    mode: "phone",
    ...args
  })
  return <input {...inputProps} />
}
Vanilla.args = {}

export const Locale = args => {
  const inputProps = useInputMask({
    mode: "phone",
    ...args
  })
  return <input {...inputProps} />
}
Locale.args = {
  options: {
    blocks: [2, 2, 2, 2]
  }
}

export const DelayedControlled = args => {
  const value = useDelayedValue("99696901")
  const inputProps = useInputMask({
    mode: "phone",
    value,
    ...args
  })
  return <input {...inputProps} />
}

DelayedControlled.args = {}
