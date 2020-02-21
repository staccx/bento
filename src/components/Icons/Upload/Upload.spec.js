import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Upload from "./Upload"

describe("Upload", () => {
  describe("Snapshots", () => {
    it("Upload", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Upload />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
