import React, { useState } from "react"
import Input from "../../../components/Forms/Input/Input"

export default {
  title: "Components/Input/Masks/Currency",
  component: Input
}

export const Vanilla = args => <Input {...args} mode="currency" />
Vanilla.args = {}

export const Locale = args => <Input {...args} mode="currency" />
Locale.args = {
  locale: "da-DK"
}

const Test = ({ args }) => {
  const [value1, value1Set] = useState()
  const [value2, value2Set] = useState()

  return (
    <form>
      <Input
        {...args}
        id={"one"}
        mode="currency"
        value={value1}
        onChange={e => value1Set(e.rawValue)}
      />
      <Input
        {...args}
        id={"two"}
        mode="currency"
        value={value2}
        onChange={e => value2Set(e.rawValue)}
      />
    </form>
  )
}

export const InForm = args => <Test args={args} />
InForm.args = {}
