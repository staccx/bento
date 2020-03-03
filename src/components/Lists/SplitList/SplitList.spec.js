import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import SplitListItem from "./SplitListItem"
import List from "../List"

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

describe("splitListItem", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              {myList.map(listItem => (
                <SplitListItem key={listItem.myUniqueId}>
                  {listItem.myLeftProp}
                  {listItem.myRightProp}
                </SplitListItem>
              ))}
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("More than 2 children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              {myList.map(listItem => (
                <SplitListItem key={listItem.myUniqueId}>
                  {listItem.myLeftProp}
                  {listItem.myRightProp}
                  {listItem.myLeftProp}
                  {listItem.myRightProp}
                </SplitListItem>
              ))}
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
