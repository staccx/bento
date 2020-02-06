import React from "react"
import { storiesOf } from "@storybook/react"
import partition from "./partition"
import { Text } from "../__storyComponents"

const data = new Array(10).fill(0).map(i => ({
  isVisible: Math.random() > 0.5
}))

storiesOf("Functions|Utils/Partition", module).add("Simple", () => {
  const [visible, notVisible] = partition(data, item => item.isVisible)
  console.log(data)
  return (
    <div>
      {data.map((item, index) => (
        <div key={item + index}>isVisible: {item.isVisible ? "yes" : "no"}</div>
      ))}
      <Text>Array length: {data.length}</Text>
      <Text>Visible: {visible.length}</Text>
      <Text>Not Visible: {notVisible.length}</Text>
    </div>
  )
})
