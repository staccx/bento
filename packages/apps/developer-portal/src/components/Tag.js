import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem } from "@staccx/base"
import SchemaConsumer from "./SchemaConsumer"
import Paths from "./Paths"

class Tag extends React.Component {
  render() {
    const { tag } = this.props
    if (!tag) {
      return null
    }

    const name = typeof tag === "string" ? tag : tag.name

    return (
      <SchemaConsumer>
        {({ sorted }) => {
          return (
            <ExpandListItem title={name}>
              <Paths paths={sorted[name]} />
            </ExpandListItem>
          )
        }}
      </SchemaConsumer>
    )
  }
}

export default Tag
