import React from "react"
import { CodeRenderer } from "@staccx/base"

const RenderedSource = ({ code }) => {
  return <CodeRenderer language="markup" code={code} />
}

export default RenderedSource
