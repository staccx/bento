import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Warning from "./Warning"

describe("Warning", () => {
  describe("Snapshots", () => {
    it("Warning", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Warning />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
