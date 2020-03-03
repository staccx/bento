import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import Slider2 from "./Slider2"

describe("Slider2", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider2 />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider2 className="slider2" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("min", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider2 min={0} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("max", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider2 max={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("step", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider2 step={1} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("step", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider2 className="slider2" min={0} max={100} step={1} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
