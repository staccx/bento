import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import QrCode from "./QrCode"

describe("QrCode", () => {
  describe("Snapshots", () => {
    it("QrCode", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <QrCode />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
