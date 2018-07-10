import React from "react"
import { Table, Text } from "@staccx/base"
import { typeToString, valueToString } from "../utils"

export default ({ props }) => {
  const data = Reflect.ownKeys(props).map(key => {
    const prop = props[key]
    const { type, defaultValue, required, description = "" } = prop
    return {
      name: key,
      type: typeToString(type),
      required: required || type.name.endsWith(".isRequired"),
      defaultValue,
      description
    }
  })

  return (
    <Table data={data}>
      {({ item }) => (
        <React.Fragment>
          <td>
            <Text>{item.name}</Text>
          </td>
          <td>{item.type}</td>
          <td>{item.required ? "yes" : "no"}</td>
          <td>{item.defaultValue && valueToString(item.defaultValue)}</td>
          <td>{item.description}</td>
        </React.Fragment>
      )}
    </Table>
  )
}
