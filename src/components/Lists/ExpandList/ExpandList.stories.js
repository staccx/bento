import React from "react"
import ExpandListItem from "./ExpandListItem"
import List from "../List"

export default {
  title: "New/Lists/ExpandList",
  component: ExpandListItem
}

export const ExpandListStandard = args => (
  <List>
    <ExpandListItem title="Hvor lang tid tar det før jeg får svar på søknaden?">
      Du får umiddelbart svar på søknaden og kan se hvor mye du får i lån
    </ExpandListItem>
    <ExpandListItem title="Hvor lang tid tar det før lånet blir utbetalt?">
      Normalt vil du ha pengene på din konto i annen bank en til to virkedager
      etter vi har mottatt søknad og godkjent all dokumentasjon. Om du ønsker
      utbetaling på dagen kontakter du vårt kundesenter.
    </ExpandListItem>
  </List>
)

export const ExpandListLongList = args => (
  <List>
    <ExpandListItem {...args}>
      This is hidden until it has been expanded
    </ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
    <ExpandListItem {...args}>This is hidden</ExpandListItem>
  </List>
)
ExpandListLongList.args = {
  variant: "variant",
  title: "This is an ExpandListItem"
}

export const ExpandListLongTitle = args => (
  <List>
    <ExpandListItem {...args}>
      This is hidden untill it has been expanded
    </ExpandListItem>
  </List>
)
ExpandListLongTitle.args = {
  variant: "variant",
  title:
    "This expand title is very long, does that matter? it might do, but i dont know, lets find out. i am now just typing random words to make this title longer, so far it seemes fine"
}

export const ExpandListDefaultExpanded = args => (
  <List>
    <ExpandListItem {...args}>
      Since i am default open, you can see me on render, click to hide me
    </ExpandListItem>
  </List>
)
ExpandListDefaultExpanded.args = {
  expanded: true,
  title: "A Title"
}
export const ExpandListFlush = args => (
  <List>
    <ExpandListItem {...args}>
      This container is flush, so i am closer to the header
    </ExpandListItem>
  </List>
)
ExpandListFlush.args = {
  flush: true,
  title: "A Title"
}
