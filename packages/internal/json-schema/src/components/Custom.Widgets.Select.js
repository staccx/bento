import React from "react"
import { Select } from "@staccx/base"

export default ({ options, onChange, ...rest }) => {
  return (
    <Select
      items={options.enumOptions}
      itemToString={item => item.label}
      itemToKey={item => item.value}
      onChange={item => onChange(item.value)}
      {...rest}
    />
  )
}
