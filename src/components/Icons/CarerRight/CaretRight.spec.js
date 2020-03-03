import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import CaretRight from "./CaretRight"

describe("CaretRight", () => {
  describe("Snapshots", () => {
    it("CaretRight", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CaretRight />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
