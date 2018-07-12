import React from "react"
import Select from "./Select"

const preview = {
  title: "Select",
  category: "Components/Forms",
  component: Select,
  render: props => (
    <Select
      items={["apple", "orange", "carrot"]}
      onChange={() => null}
      label={"Fruit"}
      selectedItem="orange"
    />
  )
}

export default preview
