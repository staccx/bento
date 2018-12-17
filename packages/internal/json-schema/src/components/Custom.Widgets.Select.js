import React from "react"
import { Select } from "@staccx/base"

export default ({ options, onChange, ...rest }) => {
  console.log(rest)
  return (
    <Select
      items={options.enumOptions}
      itemToString={item => item.label}
      itemToKey={item => item.value}
      placeHolderLabel={"Velg..."}
      onChange={item => onChange(item.value)}
      {...rest}
    />
  )
}
