import React from "react"
import { Select, Text } from "@staccx/base"

export default ({ servers }) => (
  <div>
    <Select items={servers} itemToString={item => item.url}>
      {({ item, getItemProps, selected, hightlighted }) => (
        <Text key={item.url} {...getItemProps({ item })}>{item.url}</Text>
      )}
    </Select>
  </div>
)
