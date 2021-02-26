import React from "react"
import SplitListItem from "./SplitListItem"
import List from "../List"

export default {
  title: "Components/Lists/SplitList",
  component: SplitListItem
}

export const SplitListStandard = args => (
  <>
    <List {...args}>
      {args.myList.map(listItem => (
        <splitListItem key={listItem.myUniqueId}>
          {listItem.myLeftProp}
          {listItem.myRightProp}
          {listItem.myThirdProp ? listItem.myThirdProp : null}
        </splitListItem>
      ))}
    </List>
  </>
)

SplitListStandard.args = {
  myList: [
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
}
