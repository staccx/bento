import React from "react"
import RadioPill from "./RadioPill.Item"
import { RadioPillItem } from "../../index"

export default {
  title: "Components/Forms/RadioPill",
  component: RadioPill
}

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

export const Standard = args => {
  return (
    <>
      <RadioPill group="Radiopills">
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
    </>
  )
}
