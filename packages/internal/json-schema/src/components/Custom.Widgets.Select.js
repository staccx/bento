import React from "react"
import { Select } from "@staccx/base"

export default ({ options, onChange, ...rest }) => (
  <Select
    items={options.enumOptions}
    variant={"combo"}
    itemToString={item => item.label}
    itemToKey={item => item.value}
    placeHolderLabel={"Velg..."}
    onChange={item => onChange(item.value)}
    {...rest}
  />
)
