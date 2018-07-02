import React from "react"
import { Table, Heading, Text } from "@staccx/base"
import { isArray } from "util"

const MethodAttrs = ({ responses, parameters, security }) => {
  if (responses) {
    const responsesData = Object.keys(responses).map(key => ({
      response: key,
      description: responses[key].description
    }))

    return (
      <div>
        <Heading level={5} variant="documentationAttrs">
          Responses
        </Heading>
        <Table
          data={responsesData}
          variant="documentationAttr"
          itemToKey={item => item.description}
          responses
        >
          {({ item }) => (
            <React.Fragment>
              <td>
                <Heading level={3} variant="documentationAttrResponse">
                  {item.response}
                </Heading>
              </td>
              <td>
                <p>{item.description}</p>
              </td>
            </React.Fragment>
          )}
        </Table>
      </div>
    )
  }

  if (parameters) {
    return (
      <div>
        <Heading level={5} variant="documentationAttrs">
          Parameters
        </Heading>
        <Table
          data={parameters}
          variant="documentationAttr"
          blacklist={item => item === "name" || item === "description"}
          itemToKey={item => item.name}
        >
          {({ item }) => (
            <React.Fragment>
              <td>
                <Heading level={3} variant="documentationAttrType">
                  {item.name}
                </Heading>
                <Text variant="documentationAttrType">{item.schema.type}</Text>
              </td>
              <td>
                <p>{item.description}</p>
              </td>
            </React.Fragment>
          )}
        </Table>
      </div>
    )
  }

  if (security) {
    const securityData = security.map(key => {
      const access = Object.keys(key).map(k => key[k])[0]

      return {
        auth: Object.keys(key).map(k => k),
        access: access.map(key => (
          <p key={key}>
            <code>
              <Text variant="documentationInline">{key}</Text>
            </code>
          </p>
        ))
      }
    })

    return (
      <div>
        <Heading level={5} variant="documentationAttrs">
          Authorization
        </Heading>
        <Table
          data={securityData}
          variant="documentationAttr"
          itemToKey={item => item.auth}
        >
          {({ item }) => (
            <React.Fragment>
              <td>
                <Heading level={3} variant="documentationAttrType">
                  {item.auth}
                </Heading>
              </td>
              <td>{item.access}</td>
            </React.Fragment>
          )}
        </Table>
      </div>
    )
  }

  return null
}

export default MethodAttrs
