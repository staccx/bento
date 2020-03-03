import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import BankIdMobile from "./BankIdMobile"

describe("BankIdMobile", () => {
  describe("Snapshots", () => {
    it("BankIdMobile", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <BankIdMobile />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
