import React from "react"
import { storiesOf } from "@storybook/react"
import LinkListItem from "./LinkListItem"
import List from "../List"
import docs from "./LinkListItem.md"

storiesOf("components|base/Lists/LinkList", module)
  .add(
    "With few links",
    () => {
      return (
        <List>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
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
    "With many links",
    () => {
      return (
        <List>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
          <LinkListItem to={"#"}>En lenke</LinkListItem>
          <LinkListItem to={"#"}>En til</LinkListItem>
        </List>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add("With long text", () => {
    return (
      <List>
        <LinkListItem to={"#"}>
          En lenke veldig lang tekst før lenken for å se hva som skjer da, den
          må være enda litt lengre for å se hva som skjer
        </LinkListItem>
        <LinkListItem to={"#"}>En til</LinkListItem>
      </List>
    )
  })
