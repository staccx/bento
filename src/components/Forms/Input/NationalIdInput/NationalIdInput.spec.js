import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import NationalIdInput from "./NationalIdInput"

describe("Alert", () => {
  describe("Snapshots", () => {
    it("ID", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <NationalIdInput id="test" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
