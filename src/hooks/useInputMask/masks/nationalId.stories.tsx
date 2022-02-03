import React from "react"
import { useInputMask } from "../useInputMask"

import { useDelayedValue } from "./_shared.utils"

export default {
  title: "hooks/useInputMask/National Id"
}

export const Vanilla = args => {
  const inputProps = useInputMask({
    mode: "nationalid",
    ...args
  })
  return <input {...inputProps} />
}
Vanilla.args = {}

export const Locale = args => {
  const inputProps = useInputMask({
    mode: "nationalid",
    ...args
  })
  return <input {...inputProps} />
}
Locale.args = {
  options: {
    blocks: [6, 1, 5]
  }
}

export const DelayedControlled = args => {
  const value = useDelayedValue("01065100394")
  const inputProps = useInputMask({
    mode: "nationalid",
    value,
    ...args
  })
  return <input {...inputProps} />
}

DelayedControlled.args = {}
