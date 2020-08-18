import React from "react"
import Box from "./Box"

export default {
  title: "New/Layout/Box",
  component: Box
}

export const BoxNested = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box size="flush">
      Content inside box flush
      <Box size="macro">
        <div
          style={{ backgroundColor: "#35A7FF", padding: 24, color: "white" }}
        >
          Content inside box macro
        </div>
      </Box>
    </Box>
  </div>
)

export const BoxFlush = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Flush</Box>
  </div>
)

BoxFlush.args = { size: "flush" }

export const BoxMacro = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Macro</Box>
  </div>
)

BoxMacro.args = { size: "macro" }

export const BoxTiny = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Tiny</Box>
  </div>
)

BoxTiny.args = { size: "tiny" }

export const BoxSmall = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Small</Box>
  </div>
)

BoxSmall.args = { size: "small" }

export const BoxMedium = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Medium</Box>
  </div>
)

BoxMedium.args = { size: "medium" }

export const BoxMediumPlus = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box MediumPlus</Box>
  </div>
)

BoxMediumPlus.args = { size: "mediumPlus" }

export const BoxLarge = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Large</Box>
  </div>
)

BoxLarge.args = { size: "large" }

export const BoxHuge = args => (
  <div style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}>
    <Box {...args}>Content inside box Huge</Box>
  </div>
)

BoxHuge.args = { size: "huge" }
