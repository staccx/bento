import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import InlineListItem from "./InlineListItem"
import List from "../List.js"

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <InlineListItem>One ListElement</InlineListItem>
              <InlineListItem>Another List Element</InlineListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("No Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <InlineListItem />
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
