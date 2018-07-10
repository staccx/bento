import React from "react"
import InlineListItem from "./InlineListItem"
import List from "../List"

const preview = {
  title: "InlineListItem",
  category: "component",
  component: InlineListItem,
  render: props => (
    <React.Fragment>
      <List>
        <InlineListItem>Et listeelement</InlineListItem>
        <InlineListItem>Et annet listeelement</InlineListItem>
      </List>
    </React.Fragment>
  )
}

export default preview
