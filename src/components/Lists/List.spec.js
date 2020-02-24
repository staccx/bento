import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import List from "./List"

describe("List", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <li>Test</li>
              <li>Test2</li>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List className="className">
              <li>Test</li>
              <li>Test2</li>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ordered", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List ordered>
              <li>Test</li>
              <li>Test2</li>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List className="className" ordered>
              <li>Test</li>
              <li>Test2</li>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
