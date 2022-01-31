import React from "react"
import { useDelayedValue } from "./_shared.utils"
import { useInputMask } from "../useInputMask"

export default {
  title: "hooks/useInputMask/Account"
}

export const Vanilla = args => {
  const inputProps = useInputMask({
    mode: "account",
    ...args
  })
  return <input {...inputProps} />
}
Vanilla.args = {}

export const Locale = args => {
  const inputProps = useInputMask({
    mode: "account",
    ...args
  })
  return <input {...inputProps} />
}
Locale.args = {
  options: {
    type: "BBAN",
    blocks: [4, 9],
    maxLength: 13,
    pattern: /[^0-9]+/gi
  }
}

export const DelayedController = args => {
  const value = useDelayedValue("34951515827")
  const inputProps = useInputMask({
    mode: "account",
    defaultValue: value,
    ...args
  })

  return (
    <label>
      <span>{args.label}</span>
      <input {...inputProps} />
    </label>
  )
}

DelayedController.args = {}
