import React from "react"
import { Table, Text, Paragraph } from "@staccx/base"
import { typeToString, valueToString } from "../utils"

export default ({ props }) => {
    console.log("got props", props)
  const data = Reflect.ownKeys(props).map(key => {
    const prop = props[key]
    const { type, defaultValue, required } = prop
    return {
      name: key,
      type: typeToString(type),
      required: required || type.name.endsWith(".isRequired"),
      defaultValue
    }
  })

  return (
    <Table data={data}>
      {({ item }) => (
        <React.Fragment>
          <td>
            <Text>{item.name}</Text>
            <Paragraph>{item.description}</Paragraph>
          </td>
          <td>{item.type}</td>
          <td>{item.required ? "yes" : "no"}</td>
          <td>{item.defaultValue && valueToString(item.defaultValue)}</td>
        </React.Fragment>
      )}
    </Table>
  )
}
