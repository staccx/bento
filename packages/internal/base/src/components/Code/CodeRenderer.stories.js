import React from "react"
import { storiesOf } from "@storybook/react"
import CodeRenderer from "./CodeRenderer"

storiesOf("Components|Base/Code Renderer", module).add("Basic", () => (
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
))
