import React from "react"
import CodeRenderer from "./CodeRenderer"

const preview = {
  title: "CodeRenderer",
  category: "Components/Misc",
  tags: ["component", "code"],
  component: CodeRenderer,
  render: props => (
    <CodeRenderer
      language="javascript"
      code={`import React from "react"

class MyApp extends React.Component {
  render() {
      return <div>Hello world!</div>
  }
}

export default MyApp`}
    />
  )
}

export default preview
