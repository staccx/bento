import React from "react"
import { CodeRenderer } from "@staccx/base"

const RenderedSource = ({ node }) => {
//   const code = document.body.innerHTML
  const code = node.innerHTML
  console.log(code)
  return <CodeRenderer language="markup" code={code} />
}

export default RenderedSource
