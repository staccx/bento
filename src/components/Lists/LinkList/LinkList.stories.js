import React from "react"
import LinkListItem from "./LinkListItem"
import List from "../List"

export default {
  title: "New/Components/Lists/LinkList",
  component: LinkListItem
}

export const LinkListStandard = args => (
  <List>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
  </List>
)
LinkListStandard.args = { to: "/" }

export const LinkListLongInlineList = args => (
  <List>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
    <LinkListItem {...args}>One ListElement</LinkListItem>
    <LinkListItem {...args}>Another List Element</LinkListItem>
  </List>
)
LinkListLongInlineList.args = { to: "/" }
