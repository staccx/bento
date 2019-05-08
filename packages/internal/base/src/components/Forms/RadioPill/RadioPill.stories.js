import React from "react"
import { storiesOf } from "@storybook/react"
import RadioPillItem from "./RadioPill.Item"
import RadioPill from "./RadioPill"
import docs from "./RadioPill.md"

storiesOf("components|base/Forms/RadioPill", module)
  .add(
    "With 3 pills",
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
  .add(
    "No props",
    () => {
      const handleRadioPillChange = value => {
        console.log("You selected " + value)
      }

      return (
        <RadioPill group={"Radiopills"} onChange={handleRadioPillChange}>
          <RadioPillItem key={""} value={""} defaultChecked={""} id={""}>
            {"test"}
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
  .add(
    "With 10 pills",
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
          value: 4,
          label: "4",
          defaultChecked: false
        },
        {
          myUniqueId: "h15",
          value: 5,
          label: "5",
          defaultChecked: false
        },
        {
          myUniqueId: "h16",
          value: 6,
          label: "6",
          defaultChecked: false
        },
        {
          myUniqueId: "h17",
          value: 7,
          label: "7",
          defaultChecked: false
        },
        {
          myUniqueId: "h18",
          value: 8,
          label: "8",
          defaultChecked: false
        },
        {
          myUniqueId: "h19",
          value: 9,
          label: "9",
          defaultChecked: false
        },
        {
          myUniqueId: "h20",
          value: 10,
          label: "10 + ",
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
