import React from "react"
import { Table, Heading, Text, ExpandListItem, List } from "@staccx/base"

const MethodAttrs = ({ responses, parameters, security, requestBody }) => {
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

                <Text variant="documentationAttrType">
                  {item.required && (
                    <Text variant="documentationAttrReq"> required </Text>
                  )}
                  {item.schema && item.schema.type}
                </Text>
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

  if (requestBody) {
    const content = requestBody.content
    const types = Object.keys(content || {})

    return (
      <div>
        <Heading level={5} variant="documentationAttrs">
          Request body
        </Heading>
        {types.map(type => {
          const { schema } = content[type]

          if (schema.items) {
            return (
              <Table
                data={Object.keys(schema.items || {}).map(i => ({
                  name: i,
                  ...schema.items[i]
                }))}
                variant="documentationAttr"
                blacklist={item => item === "name" || item === "description"}
                itemToKey={item => item.name}
              >
                {({ item }) => {
                  return (
                    <React.Fragment>
                      <td>
                        <Heading level={3} variant="documentationAttrType">
                          {item.name}
                        </Heading>

                        {item.type === "object" ? (
                          <Text variant="documentationAttrType">
                            {item.required && (
                              <Text variant="documentationAttrReq">
                                required
                              </Text>
                            )}

                            <List>
                              object{" "}
                              <ExpandListItem title={""}>
                                {Object.keys(item.properties || {}).map(key => (
                                  <div key={key}>
                                    {key} {item.properties[key].type}
                                  </div>
                                ))}
                              </ExpandListItem>
                            </List>
                          </Text>
                        ) : (
                          <Text variant="documentationAttrType">
                            {item.required && (
                              <Text variant="documentationAttrReq">
                                required
                              </Text>
                            )}
                            {item.type}
                          </Text>
                        )}
                      </td>
                      <td>
                        <p>{item.description}</p>
                      </td>
                    </React.Fragment>
                  )
                }}
              </Table>
            )
          }
          if (schema.properties) {
            return (
              <Table
                data={Object.keys(schema.properties || {}).map(item => ({
                  name: item,
                  required: schema.required.indexOf(item) !== -1,
                  ...schema.properties[item]
                }))}
                variant="documentationAttr"
                blacklist={item => item === "name" || item === "description"}
                itemToKey={item => item.name}
              >
                {({ item }) => (
                  <React.Fragment key={item.name}>
                    <td>
                      <Heading level={3} variant="documentationAttrType">
                        {item.name}
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
                    </td>
                  </React.Fragment>
                )}
              </Table>
            )
          }
          return null
        })}
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
