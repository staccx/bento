import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Info from "./Info"

describe("Info", () => {
  describe("Snapshots", () => {
    it("Info", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Info />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
