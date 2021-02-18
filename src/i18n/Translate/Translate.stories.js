import React from "react"
import { Translate } from "../index"
import { Button } from "../../components"

export default {
  title: "Components/i18n/Translate",
  component: Translate
}

export const Key = args => <Translate {...args} i18n="key" />
Key.args = {}

export const Multiple = args => <Translate {...args} i18n={["key", "car"]} />
Multiple.args = {}

export const MultipleWithFallback = args => (
  <Translate {...args} i18n={["notakey", "thiseither"]}>
    <div>Fallback for first key</div>
    <div>Fallback for second key</div>
    <span>Not rendered</span>
  </Translate>
)
MultipleWithFallback.args = {}

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
    count: 3
  }
}

export const Interpolation = args => <Translate i18n="interpolate" {...args} />
Interpolation.args = {
  data: {
    balance: 100000
  }
}

export const Context = args => (
  <Translate i18n="account" {...args}>
    {" "}
    savings account{" "}
  </Translate>
)
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

export const WithDebug = args => (
  <Translate i18n="this_is_key" {...args}>
    Dette er fallback
  </Translate>
)

export const ButtonWithTranslate = args => (
  <Button>
    <Translate i18n="key" {...args} />
  </Button>
)
StructuredContent.args = {
  data: {
    balance: 100000
  }
}
