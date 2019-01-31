import { Heading, RadioPill, RadioPillItem } from "@staccx/base"
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
  if (items.length > 5) {
    console.warn("Items exceed five. Consider using a radiobutton list")
  }
  return (
    <div>
      <Heading level="3">{label}</Heading>
      <RadioPill
        onChange={e => {
          onChange(e.target.value)
        }}
        group={id}
        {...rest}
      >
        {items.map(listItem => (
          <RadioPillItem
            value={listItem.value}
            key={listItem.value}
            defaultChecked={def === listItem.value}
            id={id + listItem.label}
          >
            {listItem.label}
          </RadioPillItem>
        ))}
      </RadioPill>
    </div>
  )
}
