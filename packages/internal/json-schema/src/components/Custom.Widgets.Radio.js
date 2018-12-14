import { Heading, RadioPill, RadioPillItem } from "@staccx/base"
import React from "react"

export default ({ options, label, id, onChange, schema, ...rest }) => {
  const def = !!schema.default
  return (
    <div>
      <Heading level="3">{label}</Heading>
      <RadioPill
        onChange={e => {
          onChange(e.target.value === "true")
        }}
        group={id}
        {...rest}
      >
        {options.enumOptions.map(listItem => (
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
