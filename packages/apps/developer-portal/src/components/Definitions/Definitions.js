import React from "react"
import { Table, Heading, Text } from "@staccx/base"

const Definitions = ({ definitions, tag }) => {
  if (definitions) {
    const properties = definitions.properties
    const required = definitions.required
    const definitionsData = Object.keys(properties).map(key => {
      return {
        property: key,
        type: properties[key].type,
        format: properties[key].format,
        example: properties[key].example,
        description: properties[key].description,
        required: required ? required.includes(key) : false
      }
    })
    return (
      <div>
        <Heading level={5} variant="documentationAttrs">
          The {tag} object
        </Heading>
        <Table
          data={definitionsData}
          variant="documentationAttr"
          blacklist={item => item === "type" || item === "description"}
        >
          {({ item }) => (
            <React.Fragment>
              <td>
                <Heading level={3} variant="documentationAttrResponse">
                  {item.property}
                </Heading>
                <Text variant="documentationAttrType">
                  {item.required && (
                    <Text variant="documentationAttrReq"> required </Text>
                  )}
                  {item.type}
                </Text>
              </td>
              <td>
                <p>{item.description}</p>
                {item.example && (
                  <Text variant="documentationAttrType">
                    Example: {item.example}
                  </Text>
                )}
              </td>
            </React.Fragment>
          )}
        </Table>
      </div>
    )
  }
  return null
}

export default Definitions
