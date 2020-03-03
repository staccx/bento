import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Text from "./Text"

describe("Text", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Text>This is a Text</Text>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Text />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ClassName", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Text className="className">hei</Text>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
