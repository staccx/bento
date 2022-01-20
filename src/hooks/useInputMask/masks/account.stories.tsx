import React from "react"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "hooks/useInputMask/Account"
}

export const Vanilla = args => <input {...args} mode="account" />
Vanilla.args = {
  label: "Account input with nothing fancy"
}

export const Locale = args => <input {...args} mode="account" />
Locale.args = {
  label: "Locale set explistely (Danish)",
  options: {
    type: "BBAN",
    blocks: [4, 9],
    maxLength: 13,
    pattern: /[^0-9]+/gi
  }
}

export const DelayedController = args => {
  const value = useDelayedValue("34951515827")

  return <input id={"delayed_account"} mode="account" {...args} value={value} />
}

DelayedController.args = {}
