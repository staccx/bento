import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem } from "@staccx/base"
import OpenApiConsumer from "./OpenApiConsumer"
import Paths from "./Paths"

class Tag extends React.Component {
  render() {
    const { tag } = this.props
    if (!tag) {
      return null
    }

    const name = typeof tag === "string" ? tag : tag.name

    return (
      <OpenApiConsumer>
        {({ sorted }) => {
          return (
            <ExpandListItem title={name}>
              <Paths paths={sorted[name]} />
            </ExpandListItem>
          )
        }}
      </OpenApiConsumer>
    )
  }
}

export default Tag
