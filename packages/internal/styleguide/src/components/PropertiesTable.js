import React from "react"
import styled from "styled-components"
import { Table, Text, Close, Check, Heading, theming } from "@staccx/base"
import { parseType, valueToString } from "../utils"

export default ({ props }) => {
  const data = Reflect.ownKeys(props).map(key => {
    const prop = props[key]
    const { type, defaultValue, required /* description = "" */ } = prop
    return {
      name: key,
      type: parseType(type),
      required: required || type.name.endsWith(".isRequired"),
      default: defaultValue
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
            <td>
              {item.required ? (
                <Positive>
                  <Check />
                </Positive>
              ) : (
                <Negative>
                  <Close />
                </Negative>
              )}
            </td>
            <DefaultValue>
              {item.default && valueToString(item.default)}
            </DefaultValue>
            {/* <td>{item.description}</td> */}
          </React.Fragment>
        )}
      </Table>
    </div>
  )
}

const DefaultValue = styled.td`
  color: ${theming.color.primary};
`

const Positive = styled.span`
  color: ${theming.color.positive};
`

const Negative = styled.span`
  color: ${theming.color.negative};
`
