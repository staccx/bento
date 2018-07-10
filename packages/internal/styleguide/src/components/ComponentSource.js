import React from "react"
import { CodeRenderer } from "@staccx/base"

const Source = ({ code }) => {
  return <CodeRenderer code={code} language="javascript" />
}

export default Source
