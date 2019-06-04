import React from "react"

import ReactMarkdown from "react-markdown/with-html"
import docs from "./README.md"

export default stories => {
  stories.add("Requirements", () => <ReactMarkdown source={docs} />)
}
