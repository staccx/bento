import React from "react"
import { storiesOf } from "@storybook/react"
import RadioPillItem from "./RadioPill.Item"
import RadioPill from "./RadioPill"
import docs from "./RadioPill.md"

storiesOf("components|base/Forms/RadioPill", module).add(
  "story",
  () => {
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

    return (
      <RadioPill group={"Radiopills"} onChange={handleRadioPillChange}>
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
    )
  },
  {
    info: {
      text: docs
    }
  }
)
