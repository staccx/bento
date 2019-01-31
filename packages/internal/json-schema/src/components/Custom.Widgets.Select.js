import React from "react"
import { Select } from "@staccx/base"

export default ({ options, onChange, ...rest }) => {
  let items = options.enumOptions
  let placeholder = ""
  const { transforms } = rest.formContext
  if (transforms) {
    if (transforms.enumOptions) {
      items = options.enumOptions.map(e => ({
        ...e,
        label: transforms.enumOptions(e.label)
      }))
    }
    if (rest.schema.placeholder && transforms.placeholder)
      placeholder = transforms.placeholder(rest.schema.placeholder)
  }

  return (
    <Select
      items={items}
      variant={"combo"}
      itemToString={item => item.label}
      itemToKey={item => item.value}
      placeHolderLabel={placeholder}
      onChange={item => onChange(item.value)}
      {...rest}
    />
  )
}
