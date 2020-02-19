import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Fraction from "./Fraction"

describe("Fraction", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Fraction />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Value", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Fraction value={3} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With Max", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Fraction value={10} max={10} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Value over Max", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Fraction value={12} max={10} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid Value", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Fraction value={null} max={10} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Fraction value={10} max={10}>
              <p>yepp</p>
            </Fraction>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
