import React from "react"
import RadioPill from "./RadioPill"
import RadioPillItem from "./RadioPill.Item"
import Heading from "../../Text/Heading/Heading"

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
  category: "component/Forms",
  component: RadioPill,
  render: props => (
    <div>
      <Heading level="3">Vanlig</Heading>
      <RadioPill onChange={handleRadioPillChange} group={"radiopills"}>
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

      <Heading level="3">Full bredde</Heading>
      <RadioPill full onChange={handleRadioPillChange} group={"radiopills"}>
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
    </div>
  )
}

export default preview
