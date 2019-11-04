import React from "react"
import { storiesOf } from "@storybook/react"
import Expand from "./Expand"
import docs from "./Expand.md"

storiesOf("Components|Base/Expand", module).add(
  "Span",
  () => (
    <Expand>
      <span>Expand me</span>
      <div>
        <ul>
          <li>I am hidden</li>
          <li> Until you expand</li>
        </ul>
      </div>
    </Expand>
  ),
  { info: { text: docs } }
)
