import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Success from "./Success"

describe("Success", () => {
  describe("Snapshots", () => {
    it("Success", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Success />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
