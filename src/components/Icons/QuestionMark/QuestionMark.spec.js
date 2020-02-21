import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import QuestionMark from "./QuestionMark"

describe("QuestionMark", () => {
  describe("Snapshots", () => {
    it("QuestionMark", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <QuestionMark />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
