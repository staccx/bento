import React from "react"
import LinkListItem from "./LinkListItem"
import List from "../List"

const preview = {
  title: "LinkListItem",
  category: "component/List",
  component: LinkListItem,
  render: props => (
    <React.Fragment>
      <List>
        <LinkListItem to="#">Lenke til greie</LinkListItem>
        <LinkListItem to="#">Annen lenke her</LinkListItem>
      </List>
    </React.Fragment>
  )
}

export default preview
