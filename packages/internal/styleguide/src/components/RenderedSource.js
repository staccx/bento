import React from "react"
import { CodeRenderer, Box } from "@staccx/base"

const RenderedSource = ({ code }) => {
  return (
    <Box variant="transparent">
      <CodeRenderer language="markup" code={code} />
    </Box>
  )
}

export default RenderedSource
