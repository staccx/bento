import React from "react"
import Expand from "./Expand"

const preview = {
  title: "Expand",
  category: "component/Layout",
  tags: ["visual", "animated"],
  component: Expand,
  render: props => (
    <Expand {...props}>
      <span>Expand me</span>
      <div>
        <ul>
          <li>We are all hidden</li>
          <li>Children of expand</li>
        </ul>
        <button onClick={() => console.log("Yo")}>Ikke klikk på meg</button>
      </div>
    </Expand>
  )
}

export default preview
