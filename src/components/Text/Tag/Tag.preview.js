import React from "react"
import Tag from "./Tag"

const preview = {
  title: "Tag",
  category: "Components/Texts",
  tags: ["typography"],
  component: Tag,
  render: props => (
    <div>
      <Tag {...props}>Cheese</Tag>
      <Tag {...props}>Crackers</Tag>
      <Tag {...props}>Jam</Tag>
    </div>
  )
}

export default preview
