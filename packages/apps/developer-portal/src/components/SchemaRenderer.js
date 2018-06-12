import React from "react"
import PropTypes from "prop-types"
import SchemaConsumer from "./SchemaConsumer"
import { List, SplitListItem, Heading, Text } from "@staccx/base"
import { deepfind } from "@staccx/utils"

class SchemaRenderer extends React.Component {
  render() {
    const { schema, name } = this.props
    return (
      <SchemaConsumer>
        {({ openapi }) => {
          if (schema.type === "object") {
            return (
              <React.Fragment>
                {schema.properties &&
                  Object.keys(schema.properties).map(key => {
                    const required =
                      schema.required && schema.required.indexOf(key) !== -1
                    return (
                      <SchemaRenderer
                        key={name + key}
                        schema={schema.properties[key]}
                        name={key}
                        isRequired={required}
                      />
                    )
                  })}
                {schema.additionalProperties && (
                  <SchemaRenderer
                    schema={schema.additionalProperties}
                    name={"additionalProperties"}
                  />
                )}
              </React.Fragment>
            )
          }
          if (schema.$ref) {
            const searchString = schema.$ref.replace("#/", "")
            const refSchema = deepfind(openapi, searchString, "/")
            const refName = schema.$ref.substring(
              schema.$ref.lastIndexOf("/") + 1
            )
            if (schema.$ref.includes("Allocation")) {
              console.log("Allocation schema", refSchema)
            }
            return (
              <div>
                <Heading level={"h3"}>{refName}</Heading>
                <SchemaRenderer
                  schema={refSchema}
                  name={refName}
                  isRequired={this.props.isRequired}
                />
              </div>
            )
          }

          const isArray = schema.type && schema.type.includes("array") // TODO: Constant

          if (isArray) {
            return <SchemaRenderer schema={schema.items} name={"Array of"} />
          }
          return (
            <List>
              <SplitListItem>
                <Text>{`${name}${
                  this.props.isRequired ? "(required)" : ""
                }`}</Text>
                <Text>
                  {`${schema.type}${
                    schema.format ? "(" + schema.format + ")" : ""
                  }`}
                </Text>
              </SplitListItem>
            </List>
          )
        }}
      </SchemaConsumer>
    )
  }
}

export default SchemaRenderer

SchemaRenderer.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  schema: PropTypes.object
}
