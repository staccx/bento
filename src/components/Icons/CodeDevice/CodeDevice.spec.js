import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import CodeDevice from "./CodeDevice"

describe("CodeDevice", () => {
  describe("Snapshots", () => {
    it("CodeDevice", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeDevice />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
