import React from "react"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "hooks/useInputMask/Phone"
}

export const Vanilla = args => (
  <input {...args} mode="phone" onChange={console.log} />
)
Vanilla.args = {}

export const Locale = args => <input {...args} mode="phone" />
Locale.args = {
  options: {
    blocks: [2, 2, 2, 2]
  }
}

export const DelayedControlled = args => {
  const value = useDelayedValue("99696901")

  return <input id={"delayed_phone"} mode="phone" {...args} value={value} />
}

DelayedControlled.args = {}
