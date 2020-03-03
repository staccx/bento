import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import Slider from "./Slider"

describe("Slider", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Name", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider name="Slider" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider name="Slider" onChange={e => console.log(e.target.value)} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("min", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider
              name="Slider"
              onChange={e => console.log(e.target.value)}
              min={100}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("max", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider
              name="Slider"
              onChange={e => console.log(e.target.value)}
              min={0}
              max={100}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Step", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider
              name="Slider"
              onChange={e => console.log(e.target.value)}
              min={0}
              max={100}
              step={20}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Step -", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider step={20} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("max -", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider max={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("min -", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider min={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange -", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider onChange={e => console.log(e.target.value)} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
