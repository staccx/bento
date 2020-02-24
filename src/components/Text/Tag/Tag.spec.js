import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Tag from "./Tag"

describe("Tag", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Tag>This is a tag</Tag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Tag />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ClassName", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Tag className="className">hei</Tag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
