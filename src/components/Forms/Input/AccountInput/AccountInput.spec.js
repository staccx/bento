import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import AccountInput from "./AccountInput"

describe("AccountInput", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <AccountInput id="wegwf" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Type", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <AccountInput id="wegwf" type="text" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <AccountInput id="wegwf" label="Balance" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
