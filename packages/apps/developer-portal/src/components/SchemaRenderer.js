import React from "react"
import PropTypes from "prop-types"
import SchemaConsumer from "./SchemaConsumer"
import { Text, Paragraph } from "@staccx/base"
import {deepfind} from "@staccx/utils"

class SchemaRenderer extends React.Component {
  render() {
    const { schema } = this.props
    return (
      <SchemaConsumer>
        {({ schemas }) => {

          if (schema.$ref) {
            const searchString = schema.$ref.replace("#/", "").replace(/\//g, ".")
            console.log(searchString)
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
