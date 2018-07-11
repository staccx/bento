import React from "react"
import { Table, Text, Close, Check, Heading } from "@staccx/base"
import { typeToString, valueToString } from "../utils"

export default ({ props }) => {
  const data = Reflect.ownKeys(props).map(key => {
    const prop = props[key]
    const { type, defaultValue, required /* description = "" */ } = prop
    return {
      name: key,
      type: typeToString(type),
      required: required || type.name.endsWith(".isRequired"),
      defaultValue
      // description
    }
  })

  return (
    <div>
      <Heading level="3" variant="documentationAttrs">
        Proptypes
      </Heading>
      <Table data={data} variant="propsDescription">
        {({ item }) => (
          <React.Fragment>
            <td>
              <Text>{item.name}</Text>
            </td>
            <td>{item.type}</td>
            <td>{item.required ? <Check /> : <Close />}</td>
            <td>{item.defaultValue && valueToString(item.defaultValue)}</td>
            {/* <td>{item.description}</td> */}
          </React.Fragment>
        )}
      </Table>
    </div>
  )
}
