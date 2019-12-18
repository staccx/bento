import React from "react"
import RadioPill from "./RadioPill"
import RadioPillItem from "./RadioPill.Item"
import Toggle from "../Toggle/Toggle"
import Label from "../Label/Label"

const myList = [
  {
    myUniqueId: "221e98j",
    value: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "ads31",
    value: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "h14",
    value: 3,
    label: "3 +",
    defaultChecked: false
  }
]

const handleRadioPillChange = value => {
  console.log("You selected " + value)
}

const preview = {
  title: "RadioPill",
  category: "Components/Forms",
  component: RadioPill,
  render: props => (
    <RadioPill onChange={handleRadioPillChange} group={"radiopills"} {...props}>
      {myList.map(listItem => (
        <RadioPillItem
          key={listItem.myUniqueId}
          value={listItem.value}
          defaultChecked={listItem.defaultChecked}
          id={listItem.myUniqueId}
        >
          {listItem.label}
        </RadioPillItem>
      ))}
    </RadioPill>
  ),
  renderExampleController: ({ setComponentState }) => (
    <React.Fragment>
      <Label for="largeRadio">Toggle full-width</Label>
      <Toggle
        id="largeRadio"
        onChange={e => setComponentState({ full: e.target.checked })}
      >
        large
      </Toggle>
    </React.Fragment>
  )
}

export default preview
