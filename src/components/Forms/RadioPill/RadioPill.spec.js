import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import RadioPill from "./RadioPill"
import RadioPillItem from "./RadioPill.Item"

export const myList = [
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
describe("RadioPill", () => {
  describe("Snapshots", () => {
    it("Standard", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
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
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioPill />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioPill>
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
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("RadioPillItem no props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioPill>
              {myList.map(listItem => (
                <RadioPillItem key={listItem}>{listItem.label}</RadioPillItem>
              ))}
            </RadioPill>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("RadioPillItem no children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioPill>
              {myList.map(listItem => (
                <RadioPillItem key={listItem} />
              ))}
            </RadioPill>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
