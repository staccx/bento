import {
  Heading,
  RadioButton,
  CheckGroup
} from "@staccx/base"
import React from "react"

export default ({ options, label, id, onChange, schema, ...rest }) => {
  let items = options.enumOptions
  const { transforms } = rest.formContext
  if (transforms) {
    if (transforms.enumOptions) {
      items = options.enumOptions.map(e => ({
        ...e,
        label: transforms.enumOptions(e.label)
      }))
    }
  }
  const def = !!schema.default
  return (
    <div>
      {label && <Heading level={3}>{label}</Heading>}
      <CheckGroup group={id} onChange={onChange}>
        {items.map(item => (
          <RadioButton key={`${id}-${item.label}`} id={`${id}-${item.label}`} value={item.value}>
            {item.label}
          </RadioButton>
        ))}
      </CheckGroup>
    </div>
  )
}
