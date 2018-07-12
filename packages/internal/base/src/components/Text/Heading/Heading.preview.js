import React from "react"
import Heading from "./Heading"

const preview = {
  title: "Heading",
  category: "Components/Texts",
  tags: ["typography"],
  component: Heading,
  render: props => (
    <React.Fragment>
      <Heading {...props}>This is a heading</Heading>
      <Heading {...props} level={2}>
        This is a heading
      </Heading>
      <Heading {...props} level={3}>
        This is a heading
      </Heading>
      <Heading {...props} level={4}>
        This is a heading
      </Heading>
      <Heading {...props} level={5}>
        This is a heading
      </Heading>
      <Heading {...props} level={6}>
        This is a heading
      </Heading>
    </React.Fragment>
  )
}

export default preview
