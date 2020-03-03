import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Check from "./Check"

describe("Check", () => {
  describe("Snapshots", () => {
    it("Check", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Check />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
