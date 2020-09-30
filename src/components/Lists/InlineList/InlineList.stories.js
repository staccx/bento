import React from "react"
import InlineListItem from "./InlineListItem"
import List from "../List"

export default {
  title: "Components/Lists/InlineList",
  component: InlineListItem
}

export const InlineListStandard = args => (
  <List>
    <InlineListItem>One ListElement</InlineListItem>
    <InlineListItem>Another List Element</InlineListItem>
  </List>
)

export const InlineListLongList = args => (
  <List>
    <List>
      <InlineListItem>One ListElement</InlineListItem>
      <InlineListItem>Another List Element</InlineListItem>
      <InlineListItem>One ListElement</InlineListItem>
      <InlineListItem>Another List Element</InlineListItem>
      <InlineListItem>One ListElement</InlineListItem>
      <InlineListItem>Another List Element</InlineListItem>
      <InlineListItem>One ListElement</InlineListItem>
      <InlineListItem>Another List Element</InlineListItem>
      <InlineListItem>One ListElement</InlineListItem>
      <InlineListItem>Another List Element</InlineListItem>
      <InlineListItem>One ListElement</InlineListItem>
      <InlineListItem>Another List Element</InlineListItem>
    </List>
  </List>
)
