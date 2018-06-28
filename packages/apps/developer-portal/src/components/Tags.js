import React from "react"
import PropTypes from "prop-types"
import { List } from "@staccx/base"
import OpenApiConsumer from "./OpenApiConsumer"
import Tag from "./Tag"

class Tags extends React.Component {
  render() {
    return (
      <OpenApiConsumer>
        {({ tags }) => {
          return <List>{tags.map(tag => <Tag tag={tag} />)}</List>
        }}
      </OpenApiConsumer>
    )
  }
}

export default Tags
