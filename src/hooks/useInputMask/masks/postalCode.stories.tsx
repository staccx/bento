import React from "react"

export default {
  title: "hooks/useInputMask/Postal Code"
}

export const Vanilla = args => <input {...args} mode="postalcode" />
Vanilla.args = {}

export const Locale = args => <input {...args} mode="postalcode" />
Locale.args = {
  options: {
    blocks: [4],
    maxLength: 4,
    pattern: /[^0-9]+/gi
  }
}
