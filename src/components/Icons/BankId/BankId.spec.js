import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import BankId from "./BankId"

describe("BankId", () => {
  describe("Snapshots", () => {
    it("BankId", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <BankId />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
