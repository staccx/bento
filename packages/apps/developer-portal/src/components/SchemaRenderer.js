import React from "react"
import PropTypes from "prop-types"
import SchemaConsumer from "./SchemaConsumer"
import { Text, Paragraph } from "@staccx/base"

class SchemaRenderer extends React.Component {
  render() {
    const { schema } = this.props
    return (
      <SchemaConsumer>
        {({ schemas }) => {
          console.log(schemas)
          console.log(schema)

          if (schema.$ref) {
            return schema.$ref
          }

          const isArray = schema.type.includes("array") // TODO: Constant

          return (
            <Paragraph>
              Type:{" "}
              {`${isArray ? "Array of " : ""}${
                isArray ? schema.items.type : schema.type
              }`}
            </Paragraph>
          )
        }}
      </SchemaConsumer>
    )
  }
}

export default SchemaRenderer

SchemaRenderer.propTypes = {
  schema: PropTypes.object
}
