import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import CodeBrick from "./CodeBrick"

describe("CodeBrick", () => {
  describe("Snapshots", () => {
    it("CodeBrick", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeBrick />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
