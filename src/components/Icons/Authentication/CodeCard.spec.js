import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import CodeCard from "./CodeCard"

describe("CodeCard", () => {
  describe("Snapshots", () => {
    it("CodeCard", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CodeCard />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
