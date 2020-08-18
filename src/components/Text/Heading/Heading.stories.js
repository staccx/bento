import React from "react"
import Heading from "./Heading"

export default {
  title: "New/Text/Heading",
  component: Heading
}

export const Level1Header = args => (
  <Heading {...args}>This is a level 1 Heading</Heading>
)
Level1Header.args = { level: 1 }

export const Level2Header = args => (
  <Heading {...args}>This is a level 2 Heading</Heading>
)
Level2Header.args = { level: 2 }

export const Level3Header = args => (
  <Heading {...args}>This is a level 3 Heading</Heading>
)
Level3Header.args = { level: 3 }

export const Level4Header = args => (
  <Heading {...args}>This is a level 4 Heading</Heading>
)
Level4Header.args = { level: 4 }

export const Level5Header = args => (
  <Heading {...args}>This is a level 5 Heading</Heading>
)
Level5Header.args = { level: 5 }

export const Level6Header = args => (
  <Heading {...args}>This is a level 6 Heading</Heading>
)
Level6Header.args = { level: 6 }
