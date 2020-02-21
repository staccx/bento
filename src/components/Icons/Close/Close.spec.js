import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Close from "./Close"

describe("Close", () => {
  describe("Snapshots", () => {
    it("Close", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Close />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
