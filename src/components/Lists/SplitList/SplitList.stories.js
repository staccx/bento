import React from "react"
import { storiesOf } from "@storybook/react"
import splitListItem from "./SplitListItem"
import List from "../List"
import docs from "./SplitListItem.md"

storiesOf("components|base/Lists/SplitList", module).add(
  "With few some",
  () => {
    const myList = [
      {
        myUniqueId: "221e98j",
        myLeftProp: "Amount",
        myRightProp: 500
      },
      {
        myUniqueId: "addw23",
        myLeftProp: "Amount",
        myRightProp: 1500
      },
      {
        myUniqueId: "h213",
        myLeftProp: "Has three children!",
        myRightProp: "500",
        myThirdProp: "1500"
      }
    ]

    return (
      <List>
        {myList.map(listItem => (
          <splitListItem key={listItem.myUniqueId}>
            {listItem.myLeftProp}
            {listItem.myRightProp}
            {listItem.myThirdProp ? listItem.myThirdProp : null}
          </splitListItem>
        ))}
      </List>
    )
  },
  {
    info: {
      text: docs
    }
  }
)
