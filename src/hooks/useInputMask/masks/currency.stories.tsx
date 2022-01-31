import React, { useState } from "react"
import { useInputMask } from "../useInputMask"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "hooks/useInputMask/Currency"
}

const Template = args => {
  const inputProps = useInputMask({
    mode: "currency",
    ...args
  })
  return <input {...inputProps} />
}

export const Vanilla = Template.bind({})
Vanilla.args = {}

export const Locale = Template.bind({})
Locale.args = {
  options: { locale: "da-DK", currency: "DKK" }
}

const Test = ({ args }) => {
  const [value1, value1Set] = useState<string>()
  const [value2, value2Set] = useState<string>()
  const inputPropsOne = useInputMask({
    mode: "currency",
    value: value1,
    onChange: e => value1Set(e.rawValue)
  })

  const inputPropsTwo = useInputMask({
    mode: "currency",
    value: value2,
    onChange: e => value2Set(e.rawValue)
  })

  return (
    <form>
      <input id={"one"} {...inputPropsOne} />
      <input id={"two"} {...inputPropsTwo} />
    </form>
  )
}

export const InForm = args => <Test args={args} />
InForm.args = {}

export const DelayedControlled = args => {
  const [val, valSet] = useState("135792468")
  const value = useDelayedValue(val)
  const inputProps = useInputMask({
    mode: "currency",
    value: value,
    onChange: e => valSet(e.rawValue)
  })
  return <input {...inputProps} />
}

DelayedControlled.args = {}

export const DelayedDefaultValue = args => {
  const value = useDelayedValue("135792468")
  const inputProps = useInputMask({
    mode: "currency",
    defaultValue: value
  })
  return <input {...inputProps} />
}

DelayedControlled.args = {}
