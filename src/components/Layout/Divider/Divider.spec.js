import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Divider from "./Divider"
describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Divider />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Height", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Divider height={15} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Divider className="className" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Divider className="className" height={10} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
