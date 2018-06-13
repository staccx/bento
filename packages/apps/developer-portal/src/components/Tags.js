import React from "react"
import PropTypes from "prop-types"
import { List } from "@staccx/base"
import SchemaConsumer from "./SchemaConsumer"
import Tag from "./Tag"

class Tags extends React.Component {
  render() {
    return (
      <SchemaConsumer>
        {({ tags }) => {
          return <List>{tags.map(tag => <Tag tag={tag} />)}</List>
        }}
      </SchemaConsumer>
    )
  }
}

export default Tags
