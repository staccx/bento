import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import NewBadge from "./NewBadge"

describe("NewBadge", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <NewBadge />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("number", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <NewBadge number={1000} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <NewBadge number={1000}>test</NewBadge>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("number", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <NewBadge number={10} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
