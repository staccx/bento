import React from "react"
import Box from "./Box"

const preview = {
  title: "Box",
  category: "Components/Layout",
  tags: ["visual"],
  component: Box,
  render: props => <Box {...props}>Content inside box</Box>
}

export default preview
