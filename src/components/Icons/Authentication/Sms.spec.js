import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Sms from "./Sms"

describe("Sms", () => {
  describe("Snapshots", () => {
    it("Sms", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Sms />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
