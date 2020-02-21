import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Caret from "./Caret"

describe("Caret", () => {
  describe("Snapshots", () => {
    it("Caret", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Caret />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
