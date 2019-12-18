import React from "react"
import { storiesOf } from "@storybook/react"
import InlineListItem from "./InlineListItem"
import List from "../List"
import docs from "./InlineListItem.md"

storiesOf("components|base/Lists/InlineList", module)
  .add(
    "With few inline",
    () => {
      return (
        <List>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
        </List>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Many inline list elements",
    () => {
      return (
        <List>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
          <InlineListItem>Et listeelement</InlineListItem>
          <InlineListItem>Et annet</InlineListItem>
        </List>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
