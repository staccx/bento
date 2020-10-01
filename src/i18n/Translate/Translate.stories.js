import React from "react"
import { Translate } from "../index"

export default {
  title: "Components/i18n/Translate",
  component: Translate
}

export const Key = args => <Translate {...args} i18n="key" />
Key.args = {}

export const InvalidKeyNoFallback = args => (
  <Translate {...args} i18n="invalidKey" />
)
InvalidKeyNoFallback.args = {}

export const InvalidKeyWithFallback = args => (
  <Translate {...args} i18n="invalidKey">
    This is the fallback
  </Translate>
)
InvalidKeyWithFallback.args = {}

export const Plurality = args => <Translate {...args} i18n="car" />
Plurality.args = {
  data: {
    count: 1
  }
}

export const Interpolation = args => <Translate i18n="interpolate" {...args} />
Interpolation.args = {
  data: {
    balance: 100000
  }
}

export const Context = args => <Translate i18n="account" {...args} />
Context.args = {
  data: {
    context: "savings"
  }
}

export const StructuredContent = args => <Translate i18n="blocks" {...args} />
StructuredContent.args = {
  data: {
    balance: 100000
  }
}
